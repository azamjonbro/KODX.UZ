import { Router } from 'express';
import { healthRoutes } from '../../modules/health/health.routes';
import { courseRoutes } from '../../modules/courses/courses.routes';
import { lessonRoutes } from '../../modules/lessons/lessons.routes';
import { knowledgeRoutes } from '../../modules/knowledge/knowledge.routes';

const router: Router = Router();

// Endpoint routes
router.use('/health', healthRoutes);
router.use('/courses', courseRoutes);
router.use('/lessons', lessonRoutes);
router.use('/knowledge', knowledgeRoutes);

export const v1Router: Router = router;
