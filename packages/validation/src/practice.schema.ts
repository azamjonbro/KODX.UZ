import { z } from 'zod';

export const submitTaskSchema = z.object({
  taskId: z.string().uuid(),
  code: z.string().min(1, { message: "Kod kiritilmagan" }),
  language: z.enum(['javascript', 'typescript', 'html', 'css', 'json']),
});

export type SubmitTaskInput = z.infer<typeof submitTaskSchema>;

export const createTaskSchema = z.object({
  lessonId: z.string().uuid(),
  title: z.string().min(2).max(150),
  description: z.string().min(5),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  starterCode: z.string(),
  solution: z.string().optional(),
  language: z.enum(['javascript', 'typescript', 'html', 'css', 'json']),
  points: z.number().int().positive().default(20),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
