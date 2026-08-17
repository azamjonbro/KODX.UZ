import { Router } from 'express';
import { healthController } from './health.controller';

const router: Router = Router();

router.get('/', (req, res, next) => healthController.getHealth(req, res, next));

export const healthRoutes: Router = router;
