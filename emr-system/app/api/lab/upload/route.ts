import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { z } from 'zod';

const prisma = new PrismaClient();

const labResultSchema = z.object({
  orderId: z.number().int().positive(),
  resultValue: z.number(),
  unit: z.string().min(1),
  testDate: z.string().datetime(),
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'lab_tech') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { orderId, resultValue, unit, testDate } = labResultSchema.parse(body);

    const order = await prisma.labOrders.findUnique({
      where: { order_id: orderId },
      include: { patient: true },
    });
    if (!order || order.status !== 'Pending') {
      return NextResponse.json({ error: 'Invalid or completed order' }, { status: 404 });
    }

    const labResult = await prisma.labResults.create({
      data: {
        patient_id: order.patient_id,
        technician_id: parseInt(session.user.id),
        order_id: orderId,
        test_date: new Date(testDate),
        test_type: order.test_type,
        result_value: resultValue,
        unit,
      },
    });

    await prisma.labOrders.update({
      where: { order_id: orderId },
      data: { status: 'Completed' },
    });

    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: order.patient_id,
        action: 'create',
        resource_type: 'LabResults',
        resource_id: labResult.result_id,
      },
    });

    return NextResponse.json(labResult, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload lab result' }, { status: 500 });
  }
}