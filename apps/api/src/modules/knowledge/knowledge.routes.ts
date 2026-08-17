import { Router } from 'express';
import { knowledgeController } from './knowledge.controller';

const router: Router = Router();

router.get('/search', (req, res, next) => knowledgeController.search(req, res, next));
router.get('/technologies/:tech/categories', (req, res, next) => knowledgeController.getCategoriesByTech(req, res, next));
router.get('/technologies/:tech/nodes', (req, res, next) => knowledgeController.getNodesByTech(req, res, next));
router.get('/technologies/:tech/nodes/:slug', (req, res, next) => knowledgeController.getNodeBySlug(req, res, next));

export const knowledgeRoutes: Router = router;
