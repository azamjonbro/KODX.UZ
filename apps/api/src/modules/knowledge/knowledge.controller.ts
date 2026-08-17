import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../services/prisma.service';
import { sendSuccess } from '../../utils/response';
import { NotFoundError } from '../../utils/errors';

export class KnowledgeController {
  // GET /api/v1/knowledge/search?q=...&tech=...
  public async search(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const q = ((req.query.q as string) || '').trim().toLowerCase();
      const tech = (req.query.tech as string) || undefined;

      if (!q) {
        sendSuccess(res, []);
        return;
      }

      const nodes = await prisma.knowledgeNode.findMany({
        where: {
          technology: tech ? tech : undefined,
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { slug: { contains: q, mode: 'insensitive' } },
            { englishName: { contains: q, mode: 'insensitive' } },
            { technicalSummary: { contains: q, mode: 'insensitive' } },
            { aliases: { has: q } },
          ],
        },
        include: {
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
        take: 30,
        orderBy: {
          order: 'asc',
        },
      });

      sendSuccess(res, nodes);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/v1/knowledge/technologies/:tech/categories
  public async getCategoriesByTech(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { tech } = req.params;

      const categories = await prisma.knowledgeCategory.findMany({
        where: { technology: tech },
        orderBy: { order: 'asc' },
        include: {
          nodes: {
            select: {
              id: true,
              name: true,
              slug: true,
              nodeType: true,
              status: true,
              technicalSummary: true,
              order: true,
            },
            orderBy: { order: 'asc' },
          },
        },
      });

      sendSuccess(res, categories);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/v1/knowledge/technologies/:tech/nodes
  public async getNodesByTech(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { tech } = req.params;
      const categorySlug = (req.query.category as string) || undefined;
      const nodeType = (req.query.nodeType as string) || undefined;

      const nodes = await prisma.knowledgeNode.findMany({
        where: {
          technology: tech,
          nodeType: nodeType,
          category: categorySlug ? { slug: categorySlug } : undefined,
        },
        orderBy: { order: 'asc' },
        include: {
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      });

      sendSuccess(res, nodes);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/v1/knowledge/technologies/:tech/nodes/:slug
  public async getNodeBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { tech, slug } = req.params;

      const node = await prisma.knowledgeNode.findUnique({
        where: {
          technology_slug: {
            technology: tech!,
            slug: slug!,
          },
        },
        include: {
          category: true,
        },
      });

      if (!node) {
        throw new NotFoundError(`Bilim tuguni topilmadi: ${tech}/${slug}`);
      }

      sendSuccess(res, node);
    } catch (error) {
      next(error);
    }
  }
}

export const knowledgeController = new KnowledgeController();
