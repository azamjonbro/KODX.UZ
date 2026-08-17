export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type PublishStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  coverImage?: string | null;
  level: CourseLevel;
  status: PublishStatus;
  estimatedHours: number;
  order?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  description?: string | null;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CourseWithModules extends Course {
  modules: (CourseModule & {
    lessonsCount?: number;
  })[];
}
