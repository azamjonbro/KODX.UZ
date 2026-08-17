import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../services/prisma.service';
import { sendSuccess } from '../../utils/response';
import { NotFoundError } from '../../utils/errors';

export class CourseController {
  // GET /api/v1/courses
  public async getCourses(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const courses = await prisma.course.findMany({
        where: {
          status: 'PUBLISHED',
        },
        orderBy: {
          order: 'asc',
        },
        include: {
          modules: {
            orderBy: {
              order: 'asc',
            },
            include: {
              lessons: {
                where: {
                  status: 'PUBLISHED',
                },
                orderBy: {
                  order: 'asc',
                },
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  estimatedMinutes: true,
                  order: true,
                },
              },
            },
          },
        },
      });

      sendSuccess(res, courses);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/v1/courses/:slug
  public async getCourseBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { slug } = req.params;
      const course = await prisma.course.findUnique({
        where: { slug },
        include: {
          modules: {
            orderBy: {
              order: 'asc',
            },
            include: {
              lessons: {
                where: {
                  status: 'PUBLISHED',
                },
                orderBy: {
                  order: 'asc',
                },
                select: {
                  id: true,
                  slug: true,
                  title: true,
                  description: true,
                  estimatedMinutes: true,
                  order: true,
                },
              },
            },
          },
        },
      });

      if (!course) {
        throw new NotFoundError(`Kurs topilmadi: ${slug}`);
      }

      sendSuccess(res, course);
    } catch (error) {
      next(error);
    }
  }
}

export const courseController = new CourseController();
