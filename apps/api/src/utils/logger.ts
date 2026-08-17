import pino from 'pino';
import { config } from '../config';

export const logger = pino({
  level: config.logLevel,
  transport: !config.isProduction
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
});
