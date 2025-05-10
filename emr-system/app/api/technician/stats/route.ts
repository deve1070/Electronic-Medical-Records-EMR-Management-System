import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'TECHNICIAN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get today's date at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get pending tests count
    const pendingTests = await prisma.labOrders.count({
      where: {
        status: 'PENDING'
      }
    });

    // Get completed tests count for today
    const completedToday = await prisma.labResults.count({
      where: {
        created_at: {
          gte: today
        }
      }
    });

    // Get urgent tests count
    const urgentTests = await prisma.labOrders.count({
      where: {
        status: 'PENDING',
        priority: 'HIGH'
      }
    });

    // Get recent test results
    const recentResults = await prisma.labResults.findMany({
      take: 5,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        order: {
          include: {
            patient: {
              select: {
                full_name: true
              }
            }
          }
        }
      }
    });

    // Format recent results
    const formattedResults = recentResults.map(result => ({
      order_id: result.order_id,
      patient_name: result.order.patient.full_name,
      test_type: result.order.test_type,
      status: result.status,
      created_at: result.created_at
    }));

    return NextResponse.json({
      pendingTests,
      completedToday,
      urgentTests,
      recentResults: formattedResults
    });
  } catch (error) {
    console.error('Error fetching technician stats:', error);
    return NextResponse.json({ error: 'Failed to fetch statistics' }, { status: 500 });
  }
} 