import { ref, computed } from 'vue';
import { coursesData, resolveCourseSlug, CourseData } from '../data/topics';

// Central Reactive Progress & Gamification Store
const STORAGE_KEY = 'kodx_user_progress_v2';

interface ProgressState {
  completedLessons: string[]; // List of completed lesson slugs/paths
  xp: number;
  streak: number;
  streakFrozen: boolean;
  streakFreezesCount: number;
  dailyGoalCompleted: boolean;
  activityHistory: Record<string, number>; // date string YYYY-MM-DD -> XP earned
}

function loadInitialState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (_e) {
    // fallback
  }

  // Initial demo seed matching screenshot (1240 XP, Level 7, 12 streak, 2 HTML lessons complete)
  return {
    completedLessons: ['/html/tarix', '/html/standartlar', '/html/web-sahifa-nima'],
    xp: 1240,
    streak: 12,
    streakFrozen: false,
    streakFreezesCount: 2,
    dailyGoalCompleted: false,
    activityHistory: {
      '2026-08-18': 80,
      '2026-08-17': 120,
      '2026-08-16': 100,
      '2026-08-15': 150,
      '2026-08-14': 90,
      '2026-08-13': 110,
      '2026-08-12': 130,
      '2026-08-11': 100,
      '2026-08-10': 140,
      '2026-08-09': 80,
      '2026-08-08': 120,
      '2026-08-07': 90,
    },
  };
}

const state = ref<ProgressState>(loadInitialState());

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value));
  } catch (_e) {
    // ignore
  }
}

export function useProgressStore() {
  const completedLessons = computed(() => state.value.completedLessons);
  const xp = computed(() => state.value.xp);
  const streak = computed(() => state.value.streak);
  const streakFreezesCount = computed(() => state.value.streakFreezesCount);
  const activityHistory = computed(() => state.value.activityHistory);

  // Level calculated from XP (each level is 200 XP)
  const level = computed(() => {
    return Math.max(1, Math.floor(state.value.xp / 180) + 1);
  });

  function isLessonCompleted(pathOrSlug: string): boolean {
    return state.value.completedLessons.some(
      p => p === pathOrSlug || p.endsWith(`/${pathOrSlug}`) || pathOrSlug.endsWith(p)
    );
  }

  function getCourseStats(courseSlug: string = 'html') {
    const course: CourseData = coursesData[resolveCourseSlug(`/${courseSlug}`)];
    const allLessons = course.modules.flatMap(m => m.lessons);
    const total = allLessons.length;
    const completedCount = allLessons.filter(l => isLessonCompleted(l.path)).length;
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    return {
      title: course.title,
      totalLessons: total,
      completedLessons: completedCount,
      progressPercent: percent,
    };
  }

  function markLessonComplete(path: string, xpReward: number = 50) {
    if (!state.value.completedLessons.includes(path)) {
      state.value.completedLessons.push(path);
      state.value.xp += xpReward;

      const today = new Date().toISOString().split('T')[0]!;
      state.value.activityHistory[today] = (state.value.activityHistory[today] || 0) + xpReward;

      persistState();
      return true;
    }
    return false;
  }

  function toggleLessonComplete(path: string, xpReward: number = 50) {
    const idx = state.value.completedLessons.indexOf(path);
    if (idx !== -1) {
      state.value.completedLessons.splice(idx, 1);
      state.value.xp = Math.max(0, state.value.xp - xpReward);
    } else {
      state.value.completedLessons.push(path);
      state.value.xp += xpReward;

      const today = new Date().toISOString().split('T')[0]!;
      state.value.activityHistory[today] = (state.value.activityHistory[today] || 0) + xpReward;
    }
    persistState();
  }

  function addXp(amount: number) {
    state.value.xp += amount;
    const today = new Date().toISOString().split('T')[0]!;
    state.value.activityHistory[today] = (state.value.activityHistory[today] || 0) + amount;
    persistState();
  }

  function claimDailyBonus() {
    if (!state.value.dailyGoalCompleted) {
      state.value.dailyGoalCompleted = true;
      addXp(30);
    }
  }

  return {
    state,
    completedLessons,
    xp,
    level,
    streak,
    streakFreezesCount,
    activityHistory,
    isLessonCompleted,
    getCourseStats,
    markLessonComplete,
    toggleLessonComplete,
    addXp,
    claimDailyBonus,
  };
}
