import { z } from 'zod';

export const createCourseSchema = z.object({
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(150),
  description: z.string().min(10),
  shortDescription: z.string().min(5).max(300),
  coverImage: z.string().url().optional().nullable(),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  estimatedHours: z.number().int().positive(),
});

export type CreateCourseInput = z.infer<typeof createCourseSchema>;

export const updateCourseSchema = createCourseSchema.partial();
export type UpdateCourseInput = z.infer<typeof updateCourseSchema>;

export const createModuleSchema = z.object({
  courseId: z.string().uuid(),
  title: z.string().min(2).max(150),
  description: z.string().optional().nullable(),
  order: z.number().int().nonnegative(),
});

export type CreateModuleInput = z.infer<typeof createModuleSchema>;
