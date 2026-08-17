import { Router } from 'express';
import { lessonController } from './lessons.controller';

const router: Router = Router();

router.get('/:slug', (req, res, next) => lessonController.getLessonBySlug(req, res, next));

export const lessonRoutes: Router = router;
