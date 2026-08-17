import { Router } from 'express';
import { courseController } from './courses.controller';

const router: Router = Router();

router.get('/', (req, res, next) => courseController.getCourses(req, res, next));
router.get('/:slug', (req, res, next) => courseController.getCourseBySlug(req, res, next));

export const courseRoutes: Router = router;
