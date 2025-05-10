import prisma from './prisma';
import { headers } from 'next/headers';

export async function logAccess(
  userId: number,
  patientId: number,
  action: 'VIEW' | 'CREATE' | 'UPDATE' | 'DELETE',
  resource: string,
  details?: string
) {
  try {
    const headersList = headers();
    const ipAddress = headersList.get('x-forwarded-for') || 'unknown';

    await prisma.accessLogs.create({
      data: {
        user_id: userId,
        patient_id: patientId,
        action,
        resource,
        details,
        ip_address: ipAddress,
      },
    });
  } catch (error) {
    console.error('Error logging access:', error);
  }
}

export async function logSystemAction(
  userId: number,
  action: string,
  details?: string
) {
  try {
    const headersList = headers();
    const ipAddress = headersList.get('x-forwarded-for') || 'unknown';

    await prisma.systemLogs.create({
      data: {
        user_id: userId,
        action,
        details,
        ip_address: ipAddress,
      },
    });
  } catch (error) {
    console.error('Error logging system action:', error);
  }
}

export async function logUserSession(
  userId: number,
  token: string,
  expiresAt: Date
) {
  try {
    await prisma.userSessions.create({
      data: {
        user_id: userId,
        token,
        expires_at: expiresAt,
      },
    });
  } catch (error) {
    console.error('Error logging user session:', error);
  }
}

export async function cleanupExpiredSessions() {
  try {
    await prisma.userSessions.deleteMany({
      where: {
        expires_at: {
          lt: new Date(),
        },
      },
    });
  } catch (error) {
    console.error('Error cleaning up expired sessions:', error);
  }
} 