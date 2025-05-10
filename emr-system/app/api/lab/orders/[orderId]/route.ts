import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'TECHNICIAN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orderId = parseInt(params.orderId);
    if (isNaN(orderId)) {
      return NextResponse.json({ error: 'Invalid order ID' }, { status: 400 });
    }

    const order = await prisma.labOrders.findUnique({
      where: { order_id: orderId },
      include: {
        patient: {
          select: {
            full_name: true,
            phone_number: true
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
        }
      }
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching lab order:', error);
    return NextResponse.json({ error: 'Failed to fetch lab order' }, { status: 500 });
  }
} 