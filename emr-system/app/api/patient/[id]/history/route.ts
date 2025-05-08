import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'record_officer') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const patientId = parseInt(params.id);
  if (isNaN(patientId)) {
    return NextResponse.json({ error: 'Invalid patient ID' }, { status: 400 });
  }

  try {
    const patient = await prisma.patients.update({
      where: { patient_id: patientId },
      data: { is_active: true },
    });

    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: patientId,
        action: 'update',
        resource_type: 'Patient',
        resource_id: patientId,
      },
    });

    return NextResponse.json(patient);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to activate patient' }, { status: 500 });
  }
}