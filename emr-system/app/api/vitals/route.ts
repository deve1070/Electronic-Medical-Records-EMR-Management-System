import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !['NURSE', 'DOCTOR', 'ADMIN'].includes(session.user?.role as string)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const vitals = await prisma.vitals.findMany({
      include: {
        patient: true,
      },
      orderBy: {
        recorded_at: 'desc',
      },
      take: 10,
    });

    return NextResponse.json(vitals);
  } catch (error) {
    console.error('Error fetching vitals:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !['NURSE', 'DOCTOR'].includes(session.user?.role as string)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    const { patient_id, temperature, blood_pressure, heart_rate, respiratory_rate, notes } = body;

    const vitals = await prisma.vitals.create({
      data: {
        patient_id,
        temperature,
        blood_pressure,
        heart_rate,
        respiratory_rate,
        notes,
        recorded_by: session.user?.id as string,
      },
    });

    return NextResponse.json(vitals);
  } catch (error) {
    console.error('Error recording vitals:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 