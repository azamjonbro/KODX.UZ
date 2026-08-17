import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { config } from './config';
import { requestLogger } from './middlewares/request-logger.middleware';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';
import { v1Router } from './routes/v1';

export function createApp(): Express {
  const app = express();

  // Security headers
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  // CORS configuration
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (e.g. mobile apps, curl, docker health checks)
        if (!origin) return callback(null, true);
        if (
          config.corsOrigin.indexOf(origin) !== -1 ||
          !config.isProduction
        ) {
          return callback(null, true);
        }
        return callback(new Error('CORS siyosati tomonidan bloklandi'));
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'x-request-id'],
    })
  );

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // limit each IP to 500 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Juda ko‘p so‘rovlar yuborildi. Iltimos, birozdan so‘ng qayta urinib ko‘ring.',
      },
    },
  });
  app.use(limiter);

  // Body parsers
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));
  app.use(cookieParser());

  // Request logger
  app.use(requestLogger);

  // Base route
  app.get('/', (_req, res) => {
    res.json({
      name: 'KODX 2.0 API',
      version: '2.0.0',
      description: 'Uzbek-speaking developers education platform API',
      documentation: '/api/v1/health',
    });
  });

  // API v1 router
  app.use('/api/v1', v1Router);

  // 404 & Global Error Handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
