import { checkDatabaseConnection } from '../../services/prisma.service';

export interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  database: 'connected' | 'disconnected';
  version: string;
}

export class HealthService {
  public async getHealth(): Promise<HealthStatus> {
    const isDbConnected = await checkDatabaseConnection();

    return {
      status: isDbConnected ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
      database: isDbConnected ? 'connected' : 'disconnected',
      version: '2.0.0',
    };
  }
}

export const healthService = new HealthService();
