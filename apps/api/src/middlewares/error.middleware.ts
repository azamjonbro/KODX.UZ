import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/errors';
import { sendError } from '../utils/response';
import { logger } from '../utils/logger';
import { config } from '../config';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const requestId = req.headers['x-request-id'] as string;

  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
      code: e.code,
    }));

    sendError(res, 'Validatsiya xatosi', 422, 'VALIDATION_ERROR', formattedErrors);
    return;
  }

  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode, err.code, err.details);
    return;
  }

  // Unhandled errors
  logger.error(
    {
      requestId,
      err: {
        message: err.message,
        stack: config.isProduction ? undefined : err.stack,
      },
    },
    'Serverda kutilmagan xatolik yuz berdi'
  );

  sendError(
    res,
    config.isProduction ? 'Serverda ichki xatolik yuz berdi' : err.message,
    500,
    'INTERNAL_SERVER_ERROR'
  );
}

export function notFoundHandler(req: Request, res: Response): void {
  sendError(res, `Marshrut topilmadi: ${req.method} ${req.originalUrl}`, 404, 'ROUTE_NOT_FOUND');
}
