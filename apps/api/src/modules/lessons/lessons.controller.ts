import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../services/prisma.service';
import { sendSuccess } from '../../utils/response';
import { NotFoundError } from '../../utils/errors';

export class LessonController {
  // GET /api/v1/lessons/:slug
  public async getLessonBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { slug } = req.params;

      const lesson = await prisma.lesson.findUnique({
        where: { slug },
        include: {
          module: {
            include: {
              course: {
                select: {
                  id: true,
                  slug: true,
                  title: true,
                },
              },
            },
          },
          practiceTasks: {
            select: {
              id: true,
              title: true,
              description: true,
              difficulty: true,
              starterCode: true,
              language: true,
              points: true,
              testCases: {
                where: { isHidden: false },
                select: {
                  id: true,
                  input: true,
                  expectedOutput: true,
                },
              },
            },
          },
        },
      });

      if (!lesson || lesson.status !== 'PUBLISHED') {
        throw new NotFoundError(`Dars topilmadi: ${slug}`);
      }

      // Find next and prev lessons in the same course
      const allLessonsInCourse = await prisma.lesson.findMany({
        where: {
          module: {
            courseId: lesson.module.courseId,
          },
          status: 'PUBLISHED',
        },
        orderBy: [
          { module: { order: 'asc' } },
          { order: 'asc' },
        ],
        select: {
          slug: true,
          title: true,
        },
      });

      const currentIndex = allLessonsInCourse.findIndex((l) => l.slug === slug);
      const prevLesson = currentIndex > 0 ? allLessonsInCourse[currentIndex - 1] : null;
      const nextLesson =
        currentIndex >= 0 && currentIndex < allLessonsInCourse.length - 1
          ? allLessonsInCourse[currentIndex + 1]
          : null;

      sendSuccess(res, {
        ...lesson,
        prevLesson,
        nextLesson,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const lessonController = new LessonController();
