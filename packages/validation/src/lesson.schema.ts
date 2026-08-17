import { z } from 'zod';

export const createLessonSchema = z.object({
  moduleId: z.string().uuid(),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(150),
  description: z.string().optional().nullable(),
  content: z.string().min(1),
  order: z.number().int().nonnegative(),
  estimatedMinutes: z.number().int().positive(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
});

export type CreateLessonInput = z.infer<typeof createLessonSchema>;

export const updateLessonSchema = createLessonSchema.partial();
export type UpdateLessonInput = z.infer<typeof updateLessonSchema>;

export const updateProgressSchema = z.object({
  lessonId: z.string().uuid(),
  status: z.enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED']),
  progressPercent: z.number().min(0).max(100),
});

export type UpdateProgressInput = z.infer<typeof updateProgressSchema>;
