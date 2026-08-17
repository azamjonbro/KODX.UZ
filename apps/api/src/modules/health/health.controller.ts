import { Request, Response, NextFunction } from 'express';
import { healthService } from './health.service';
import { sendSuccess } from '../../utils/response';

export class HealthController {
  public async getHealth(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const health = await healthService.getHealth();
      const statusCode = health.status === 'healthy' ? 200 : 503;
      sendSuccess(res, health, statusCode);
    } catch (error) {
      next(error);
    }
  }
}

export const healthController = new HealthController();
