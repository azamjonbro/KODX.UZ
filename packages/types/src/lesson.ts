import { PublishStatus } from './course';

export type ProgressStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Lesson {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  description?: string | null;
  content: string;
  order: number;
  estimatedMinutes: number;
  status: PublishStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  status: ProgressStatus;
  progressPercent: number;
  startedAt: string;
  completedAt?: string | null;
  updatedAt: string;
}

export interface LessonDetail extends Lesson {
  progress?: LessonProgress | null;
  moduleTitle?: string;
  courseSlug?: string;
  courseTitle?: string;
  nextLesson?: { slug: string; title: string } | null;
  prevLesson?: { slug: string; title: string } | null;
}
