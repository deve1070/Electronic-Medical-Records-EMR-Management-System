import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !['record_officer', 'doctor', 'nurse', 'admin'].includes(session.user.role)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const phone = request.nextUrl.searchParams.get('phone');
  if (!phone) {
    return NextResponse.json({ error: 'Phone number required' }, { status: 400 });
  }

  try {
    const patients = await prisma.patients.findMany({
      where: {
        phone_number: { contains: phone, mode: 'insensitive' },
      },
      select: {
        patient_id: true,
        full_name: true,
        phone_number: true,
        is_active: true,
      },
    });

    if (patients.length > 0) {
      await prisma.accessLogs.create({
        data: {
          user_id: parseInt(session.user.id),
          patient_id: patients[0].patient_id,
          action: 'search',
          resource_type: 'Patient',
          resource_id: patients[0].patient_id,
        },
      });
    }

    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search patients' }, { status: 500 });
  }
}