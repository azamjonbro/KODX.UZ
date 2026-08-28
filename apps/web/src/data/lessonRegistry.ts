/**
 * KODX.uz — Dars reyestri.
 *
 * Bitta joydan har uchala kurs (HTML / CSS / JavaScript) uchun chuqur dars
 * kontentini beradi. Kontent talab bo'yicha (lazy) hosil qilinadi va
 * memoizatsiya qilinadi — 749 ta darsni oldindan qurish shart emas.
 */

import { coursesData, findLesson, getCourseLessons, resolveCourseSlug } from './topics';
import { generateRichLessonData } from './htmlModulesData';
import { generateCssLessonData } from './cssModulesData';
import { generateJsLessonData } from './jsModulesData';
import type {
  ComprehensiveLesson,
  CourseSlug,
  CourseTheme,
  SubthemeItem,
} from './lessonTypes';

type Generator = (
  slug: string,
  title: string,
  moduleTitle: string,
  moduleOrder: number,
  estimatedMinutes?: number,
) => ComprehensiveLesson;

const generators: Record<CourseSlug, Generator> = {
  html: generateRichLessonData,
  css: generateCssLessonData,
  javascript: generateJsLessonData,
};

/* ------------------------------------------------------------------ */
/* Kurs UI mavzulari                                                   */
/* ------------------------------------------------------------------ */

const sharedTabs = [
  { id: 'theory', label: 'Standartlar & Nazariya', icon: '📘' },
  { id: 'internals', label: 'Dvigatel Ichki Tuzilishi', icon: '🔬' },
  { id: 'a11y', label: 'Accessibility (AXTree)', icon: '♿' },
  { id: 'security', label: 'Xavfsizlik & CWV', icon: '🛡️' },
  { id: 'kid', label: '5 Yoshli Bola', icon: '👶' },
  { id: 'sandbox', label: 'Sandbox IDE', icon: '💻' },
  { id: 'video', label: 'Simulyator', icon: '🎬' },
  { id: 'quiz', label: 'Debugging & Test', icon: '🧩', badge: 'Challenge' },
];

function tabsFor(internalsLabel: string) {
  return sharedTabs.map(tab =>
    tab.id === 'internals' ? { ...tab, label: internalsLabel } : { ...tab },
  );
}

export const courseThemes: Record<CourseSlug, CourseTheme> = {
  html: {
    slug: 'html',
    title: coursesData.html.title,
    icon: '🌐',
    rootPath: '/html',
    specName: 'WHATWG HTML Living Standard',
    engineName: 'Chromium Blink',
    codeLanguage: 'html',
    internalsHeading: 'Chromium Blink C++ Merosxo‘rlik Shajarasi (Inheritance Tree)',
    tabs: tabsFor('Blink C++ Xotira'),
  },
  css: {
    slug: 'css',
    title: coursesData.css.title,
    icon: '🎨',
    rootPath: '/css',
    specName: 'W3C CSS Specifications',
    engineName: 'Blink Style Engine',
    codeLanguage: 'css',
    internalsHeading: 'Blink Style Engine C++ Quvuri (CSSOM → ComputedStyle)',
    tabs: tabsFor('Style Engine & CSSOM'),
  },
  javascript: {
    slug: 'javascript',
    title: coursesData.javascript.title,
    icon: '⚡',
    rootPath: '/javascript',
    specName: 'ECMAScript Language Specification',
    engineName: 'V8',
    codeLanguage: 'javascript',
    internalsHeading: 'V8 Dvigateli C++ Quvuri (Parser → Ignition → TurboFan)',
    tabs: tabsFor('V8 Bytecode & Xotira'),
  },
};

/* ------------------------------------------------------------------ */
/* Dars kontentini olish                                               */
/* ------------------------------------------------------------------ */

const cache = new Map<string, ComprehensiveLesson>();

/**
 * Kurs va slug bo'yicha chuqur dars kontentini qaytaradi.
 * Dars kurs daraxtida topilmasa ham, slugdan sarlavha yasab kontent beriladi
 * (shu sababli hech qachon bo'sh sahifa ko'rinmaydi).
 */
export function getLesson(courseSlug: CourseSlug, lessonSlug: string): ComprehensiveLesson {
  const key = `${courseSlug}/${lessonSlug}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const found = findLesson(courseSlug, lessonSlug);
  const generate = generators[courseSlug];

  const lesson = found
    ? generate(
        lessonSlug,
        found.lesson.title,
        found.module.title,
        found.module.order,
        found.lesson.estimatedMinutes,
      )
    : generate(
        lessonSlug,
        lessonSlug.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
        coursesData[courseSlug].modules[0]?.title ?? '01. KIRISH',
        1,
      );

  cache.set(key, lesson);
  return lesson;
}

/** Router yo'lidan to'g'ridan-to'g'ri darsni oladi. */
export function getLessonByPath(path: string): ComprehensiveLesson {
  const courseSlug = resolveCourseSlug(path);
  const lessonSlug = path.split('/').filter(Boolean).pop() ?? '';
  return getLesson(courseSlug, lessonSlug);
}

/** Kurs ichidagi oldingi va keyingi darslar. */
export function getNeighbours(
  courseSlug: CourseSlug,
  lessonSlug: string,
): { prev: SubthemeItem | null; next: SubthemeItem | null } {
  const lessons = getCourseLessons(courseSlug);
  const index = lessons.findIndex(l => l.slug === lessonSlug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? lessons[index - 1]! : null,
    next: index + 1 < lessons.length ? lessons[index + 1]! : null,
  };
}

export { resolveCourseSlug };
export type { ComprehensiveLesson, CourseSlug, CourseTheme, SubthemeItem };
