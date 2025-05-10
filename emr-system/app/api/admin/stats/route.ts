import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get total patients
    const totalPatients = await prisma.patients.count();

    // Get active doctors (doctors who are active users)
    const activeDoctors = await prisma.users.count({
      where: {
        role: 'DOCTOR',
        is_active: true
      }
    });

    // Get pending lab orders
    const pendingLabOrders = await prisma.labOrders.count({
      where: {
        status: 'PENDING'
      }
    });

    return NextResponse.json({
      totalPatients,
      activeDoctors,
      pendingLabOrders
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin stats' },
      { status: 500 }
    );
  }
} 