import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'doctor') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const patients = await prisma.patients.findMany({
      select: {
        patient_id: true,
        full_name: true,
        phone_number: true,
        is_active: true,
      },
      orderBy: { full_name: 'asc' },
    });

    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
  }
}