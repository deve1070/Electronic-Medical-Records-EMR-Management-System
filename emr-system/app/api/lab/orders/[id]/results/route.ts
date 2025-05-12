import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'LAB_TECHNICIAN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const orderId = parseInt(params.id);
    const body = await request.json();
    const { result_data, is_positive } = body;

    // Get the lab technician ID
    const technician = await prisma.labTechnicians.findFirst({
      where: {
        user: {
          user_id: parseInt(session.user.id)
        }
      }
    });

    if (!technician) {
      return new NextResponse('Lab technician not found', { status: 404 });
    }

    // Get the lab order to ensure it exists
    const order = await prisma.labOrders.findUnique({
      where: {
        order_id: orderId
      }
    });

    if (!order) {
      return new NextResponse('Lab order not found', { status: 404 });
    }

    // Create lab result
    const result = await prisma.labResults.create({
      data: {
        order_id: orderId,
        technician_id: technician.technician_id,
        result_data,
        is_positive,
        status: 'COMPLETED'
      }
    });

    // Update lab order status
    await prisma.labOrders.update({
      where: {
        order_id: orderId
      },
      data: {
        status: 'COMPLETED'
      }
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error submitting lab results:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 