import { Router } from 'express';
import { healthRoutes } from '../../modules/health/health.routes';
import { courseRoutes } from '../../modules/courses/courses.routes';
import { lessonRoutes } from '../../modules/lessons/lessons.routes';

const router: Router = Router();

// Endpoint routes
router.use('/health', healthRoutes);
router.use('/courses', courseRoutes);
router.use('/lessons', lessonRoutes);

export const v1Router: Router = router;
