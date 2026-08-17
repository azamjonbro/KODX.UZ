import dotenv from 'dotenv';
import path from 'path';

// Load .env from workspace root or current directory
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT || '4000', 10),
  apiUrl: process.env.API_URL || 'http://localhost:4000',
  appUrl: process.env.APP_URL || 'http://localhost:5173',
  adminUrl: process.env.ADMIN_URL || 'http://localhost:5174',
  corsOrigin: (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:5174')
    .split(',')
    .map((origin) => origin.trim()),
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || 'dev_super_secret_access_jwt_key_at_least_32_characters',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'dev_super_secret_refresh_jwt_key_at_least_32_characters',
    accessExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '15m',
    refreshExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
  },
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/kodx_db?schema=public',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  logLevel: process.env.LOG_LEVEL || 'debug',
};
