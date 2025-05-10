import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { z } from 'zod';

const prisma = new PrismaClient();

const labResultSchema = z.object({
  order_id: z.number().int().positive(),
  result_data: z.string().min(1),
  is_positive: z.boolean(),
  status: z.enum(['PENDING', 'COMPLETED']).default('COMPLETED'),
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'TECHNICIAN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { order_id, result_data, is_positive, status } = labResultSchema.parse(body);

    const order = await prisma.labOrders.findUnique({
      where: { order_id },
      include: { patient: true },
    });

    if (!order) {
      return NextResponse.json({ error: 'Lab order not found' }, { status: 404 });
    }

    const labResult = await prisma.labResults.create({
      data: {
        order_id,
        patient_id: order.patient_id,
        technician_id: parseInt(session.user.id),
        result_data,
        status,
        is_positive,
        is_viewed: false
      },
    });

    await prisma.labOrders.update({
      where: { order_id },
      data: { status: 'COMPLETED' },
    });

    // Create system log
    await prisma.systemLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        action: 'CREATE',
        details: `Lab result created for order #${order_id}`,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown'
      }
    });

    // Create access log
    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: order.patient_id,
        action: 'CREATE',
        resource: 'LAB_RESULT',
        details: `Created lab result for patient ${order.patient.full_name}`,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown'
      }
    });

    return NextResponse.json(labResult, { status: 201 });
  } catch (error) {
    console.error('Error uploading lab result:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to upload lab result' }, { status: 500 });
  }
}