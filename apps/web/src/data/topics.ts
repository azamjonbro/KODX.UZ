/**
 * KODX.uz — Kurs daraxti (sidebar, navigatsiya, progress).
 *
 * Bu yerda hech qanday qo'lda yozilgan `id`, `path` yoki `totalLessons` yo'q.
 * Barchasi `courseCatalog.ts` dagi xom katalogdan hosil qilinadi, shu sababli
 * ma'lumotlar hech qachon bir-biriga zid bo'lmaydi.
 */

import { rawCourses, type RawCourse, type RawModule } from './courseCatalog';
import {
  COURSE_SLUGS,
  isCourseSlug,
  type CourseData,
  type CourseSlug,
  type SubthemeItem,
  type ThemeModuleItem,
} from './lessonTypes.ts';

// Qayta eksport — eski importlar buzilmasligi uchun.
export type { CourseData, CourseSlug, SubthemeItem, ThemeModuleItem };
export { COURSE_SLUGS, isCourseSlug };

function buildModule(
  courseSlug: CourseSlug,
  raw: RawModule,
  order: number,
  completed: Set<string>,
): ThemeModuleItem {
  const lessons: SubthemeItem[] = raw.lessons.map(([slug, title, estimatedMinutes], i) => ({
    id: `${order}.${i + 1}`,
    slug,
    title,
    path: `/${courseSlug}/${slug}`,
    estimatedMinutes,
    isCompleted: completed.has(slug),
  }));

  return {
    id: `${courseSlug}-mod-${order}`,
    title: raw.title,
    order,
    isCompleted: lessons.length > 0 && lessons.every(l => l.isCompleted),
    lessons,
  };
}

function buildCourse(slug: CourseSlug, raw: RawCourse): CourseData {
  const completed = new Set(raw.seedCompleted);
  const modules = raw.modules.map((mod, i) => buildModule(slug, mod, i + 1, completed));
  const allLessons = modules.flatMap(m => m.lessons);

  return {
    title: raw.title,
    slug,
    totalLessons: allLessons.length,
    completedLessons: allLessons.filter(l => l.isCompleted).length,
    modules,
  };
}

export const coursesData: Record<CourseSlug, CourseData> = {
  html: buildCourse('html', rawCourses.html),
  css: buildCourse('css', rawCourses.css),
  javascript: buildCourse('javascript', rawCourses.javascript),
};

/** Kurs ikonkasi (breadcrumb va sidebar uchun). */
export const courseIcons: Record<CourseSlug, string> = {
  html: rawCourses.html.icon,
  css: rawCourses.css.icon,
  javascript: rawCourses.javascript.icon,
};

/** URL yo'lidan kurs slugini aniqlaydi. Topilmasa `html` qaytaradi. */
export function resolveCourseSlug(path: string): CourseSlug {
  const segment = path.split('/').filter(Boolean)[0] ?? '';
  return isCourseSlug(segment) ? segment : 'html';
}

/** Kursning barcha darslarini tekis ro'yxat sifatida qaytaradi. */
export function getCourseLessons(courseSlug: CourseSlug): SubthemeItem[] {
  return coursesData[courseSlug].modules.flatMap(m => m.lessons);
}

/** Dars va uning modulini slug bo'yicha topadi. */
export function findLesson(
  courseSlug: CourseSlug,
  lessonSlug: string,
): { lesson: SubthemeItem; module: ThemeModuleItem } | null {
  for (const mod of coursesData[courseSlug].modules) {
    const lesson = mod.lessons.find(l => l.slug === lessonSlug);
    if (lesson) return { lesson, module: mod };
  }
  return null;
}

/** Tez murojaat uchun tekislangan ro'yxat. */
export const topics: Record<CourseSlug, { title: string; path: string }[]> = {
  html: getCourseLessons('html').map(l => ({ title: l.title, path: l.path })),
  css: getCourseLessons('css').map(l => ({ title: l.title, path: l.path })),
  javascript: getCourseLessons('javascript').map(l => ({ title: l.title, path: l.path })),
};
