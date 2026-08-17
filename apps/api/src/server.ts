import { createApp } from './app';
import { config } from './config';
import { logger } from './utils/logger';
import { prisma, checkDatabaseConnection } from './services/prisma.service';

async function bootstrap(): Promise<void> {
  const app = createApp();

  // Test DB connection on startup
  const isDbConnected = await checkDatabaseConnection();
  if (isDbConnected) {
    logger.info('✅ PostgreSQL bazasiga muvaffaqiyatli ulandi');
  } else {
    logger.warn('⚠️ PostgreSQL bazasiga ulanib bo‘lmadi. DATABASE_URL parametrini tekshiring');
  }

  const server = app.listen(config.port, () => {
    logger.info(`🚀 KODX 2.0 API server ishga tushdi: ${config.apiUrl}`);
    logger.info(`📋 Health check: ${config.apiUrl}/api/v1/health`);
    logger.info(`🌍 Muhit: ${config.env}`);
  });

  // Graceful shutdown
  const signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT'];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      logger.info(`${signal} signali qabul qilindi. Server to‘xtatilmoqda...`);
      server.close(async () => {
        logger.info('HTTP server yopildi.');
        await prisma.$disconnect();
        logger.info('Database aloqasi uzildi.');
        process.exit(0);
      });
    });
  });
}

bootstrap().catch((error) => {
  logger.error({ err: error }, 'Serverni ishga tushirishda kutilmagan xatolik yuz berdi');
  process.exit(1);
});
