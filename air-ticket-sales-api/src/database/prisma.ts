import { IDatabaseConnector } from '../controllers/orm/protocols';
import { PrismaClient } from '@prisma/client';

export class PrismaConnector implements IDatabaseConnector {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async connect(): Promise<void> {
    await this.client.$connect();
    console.log('Connected to prisma');
  }

  static async connect(): Promise<void> {
    const connector = new PrismaConnector();
    await connector.connect();
  }
}
