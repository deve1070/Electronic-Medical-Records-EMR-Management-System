import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'lab_tech') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orders = await prisma.labOrders.findMany({
      where: { status: 'Pending' },
      include: {
        patient: { select: { full_name: true, phone_number: true } },
        orderedBy: { select: { full_name: true } },
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch lab orders' }, { status: 500 });
  }
}