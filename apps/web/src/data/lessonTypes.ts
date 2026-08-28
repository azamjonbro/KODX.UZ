/**
 * KODX.uz — Umumiy dars tiplari.
 *
 * HTML, CSS va JavaScript kurslari bitta shakldan foydalanadi. Shu sababli
 * barcha interfeyslar shu yerda bir marta e'lon qilinadi va har bir kurs
 * generatori (htmlModulesData / cssModulesData / jsModulesData) shu tiplarni
 * import qiladi.
 */

/** Loyihada mavjud bo'lgan kurslar. */
export type CourseSlug = 'html' | 'css' | 'javascript';

export const COURSE_SLUGS: CourseSlug[] = ['html', 'css', 'javascript'];

export function isCourseSlug(value: string): value is CourseSlug {
  return (COURSE_SLUGS as string[]).includes(value);
}

/* ------------------------------------------------------------------ */
/* Kurs daraxti (sidebar / navigatsiya)                                */
/* ------------------------------------------------------------------ */

export interface SubthemeItem {
  id: string;
  slug: string;
  title: string;
  path: string;
  estimatedMinutes: number;
  isCompleted: boolean;
}

export interface ThemeModuleItem {
  id: string;
  title: string;
  order: number;
  isCompleted: boolean;
  lessons: SubthemeItem[];
}

export interface CourseData {
  title: string;
  slug: CourseSlug;
  /** Modullardagi darslar sonidan avtomatik hisoblanadi. */
  totalLessons: number;
  /** Boshlang'ich (seed) tugallangan darslar soni. */
  completedLessons: number;
  modules: ThemeModuleItem[];
}

/* ------------------------------------------------------------------ */
/* Chuqur dars kontenti                                                */
/* ------------------------------------------------------------------ */

export interface LessonAttribute {
  name: string;
  type: string;
  defaultVal: string;
  description: string;
  isGlobal?: boolean;
}

export interface LessonQuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface DebuggingChallenge {
  title: string;
  brokenCode: string;
  fixedCode: string;
  bugDescription: string;
  hints: string[];
}

export type PipelineCost = 'High' | 'Medium' | 'Low' | 'None';
export type WebVitalMetric = 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TBT' | 'TTFB';

export interface DeepDiveEngineering {
  /** C++ sinf merosxo'rlik shajarasi (Blink yoki V8). */
  blinkClassHierarchy: string[];
  memoryAllocation: string;
  crpCost: {
    reflow: PipelineCost;
    repaint: PipelineCost;
    compositeOnly: boolean;
    explanation: string;
  };
  axTreeMapping: {
    implicitRole: string;
    accessibleName: string;
    keyboardNav: string;
  };
  security: {
    xssVector: string;
    cspPolicy: string;
    sanitizationTip: string;
  };
  coreWebVitals: {
    metric: WebVitalMetric;
    impact: string;
    optimizationRule: string;
  };
  debuggingChallenge: DebuggingChallenge;
}

export interface ComprehensiveLesson {
  id: string;
  /** Dars qaysi kursga tegishli ekanini bildiradi. */
  course: CourseSlug;
  slug: string;
  title: string;
  moduleTitle: string;
  moduleOrder: number;
  description: string;
  estimatedMinutes: number;
  spec: string;
  kidAnalogy: {
    title: string;
    story: string;
    keyTakeaway: string;
  };
  cppInternalCode: {
    filename: string;
    code: string;
    explanation: string;
  };
  attributes?: LessonAttribute[];
  proTips: string[];
  gotchas: string[];
  content: string;
  codeExample: string;
  quiz?: LessonQuizQuestion[];
  deepDive: DeepDiveEngineering;
}

/* ------------------------------------------------------------------ */
/* Kurs uchun UI mavzusi (breadcrumb, tab nomlari, ranglar)            */
/* ------------------------------------------------------------------ */

export interface CourseTabDef {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

export interface CourseTheme {
  slug: CourseSlug;
  /** Sidebar/breadcrumbdagi nom, masalan "HTML ASOSLARI". */
  title: string;
  icon: string;
  /** Kurs bosh sahifasiga havola. */
  rootPath: string;
  /** Standart hujjat nomi ("WHATWG HTML Living Standard"). */
  specName: string;
  /** Dvigatel nomi ("Chromium Blink", "V8"). */
  engineName: string;
  /** Kod namunalari uchun til (markdown fence). */
  codeLanguage: string;
  /** "internals" tab sarlavhasi. */
  internalsHeading: string;
  tabs: CourseTabDef[];
}
