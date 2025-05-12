import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const disease = searchParams.get('disease');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  if (!disease || !startDate || !endDate) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  try {
    const patients = await prisma.patient.findMany({
      where: {
        diagnoses: {
          some: {
            disease: {
              name: disease,
            },
            diagnosisDate: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        },
      },
      include: {
        diagnoses: {
          include: {
            disease: true,
          },
        },
      },
    });

    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
  }
} 