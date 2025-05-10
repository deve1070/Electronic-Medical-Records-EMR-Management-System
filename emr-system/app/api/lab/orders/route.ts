import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'TECHNICIAN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const orders = await prisma.labOrders.findMany({
      where: {
        status: 'PENDING'
      },
      select: {
        order_id: true,
        test_type: true,
        priority: true,
        patient: {
          select: {
            patient_id: true,
            full_name: true
          }
        },
        doctor: {
          select: {
            user: {
              select: {
                full_name: true
              }
            }
          }
        },
        ordered_by_user: {
          select: {
            full_name: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching lab orders:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}