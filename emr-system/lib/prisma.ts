import { PrismaClient } from '@prisma/client';

// Extend globalThis to include prisma
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

try {
  prisma = globalThis.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
  }
} catch (error) {
  console.error('Failed to initialize Prisma Client:', error);
  throw error;
}

export default prisma;