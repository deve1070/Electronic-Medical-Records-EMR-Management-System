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

    const results = await prisma.labResults.findMany({
      select: {
        result_id: true,
        order_id: true,
        result_data: true,
        status: true,
        is_positive: true,
        created_at: true,
        patient: {
          select: {
            full_name: true
          }
        },
        order: {
          select: {
            test_type: true,
            doctor: {
              select: {
                user: {
                  select: {
                    full_name: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching lab results:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'TECHNICIAN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { order_id, patient_id, result_data, is_positive, status } = body;

    if (!order_id || !patient_id || !result_data || status === undefined) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // First, get the order to ensure it exists and is pending
    const order = await prisma.labOrders.findUnique({
      where: { order_id },
      select: { status: true }
    });

    if (!order) {
      return new NextResponse('Order not found', { status: 404 });
    }

    if (order.status !== 'PENDING') {
      return new NextResponse('Order is not pending', { status: 400 });
    }

    // Create the result and update the order status in a transaction
    const [result] = await prisma.$transaction([
      prisma.labResults.create({
        data: {
          order_id,
          patient_id,
          technician_id: parseInt(session.user.id),
          result_data,
          status,
          is_positive: is_positive || false
        }
      }),
      prisma.labOrders.update({
        where: { order_id },
        data: { status: 'COMPLETED' }
      })
    ]);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating lab result:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 