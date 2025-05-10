import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'PHARMACIST') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get total medications
    const totalMedications = await prisma.medications.count();

    // Get low stock items (less than 10 units)
    const lowStockItems = await prisma.medications.count({
      where: {
        quantity: {
          lt: 10
        }
      }
    });

    // Get pending prescriptions
    const pendingPrescriptions = await prisma.prescriptions.count({
      where: {
        status: 'PENDING'
      }
    });

    // Get expiring items (within 30 days)
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

    const expiringItems = await prisma.medications.count({
      where: {
        expiry_date: {
          lte: thirtyDaysFromNow,
          gt: new Date()
        }
      }
    });

    return NextResponse.json({
      totalMedications,
      lowStockItems,
      pendingPrescriptions,
      expiringItems
    });
  } catch (error) {
    console.error('Error fetching pharmacy stats:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 