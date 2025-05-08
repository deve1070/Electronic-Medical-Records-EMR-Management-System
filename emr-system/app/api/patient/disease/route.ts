import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const diseaseName = request.nextUrl.searchParams.get('disease');
  const startDate = request.nextUrl.searchParams.get('startDate');
  const endDate = request.nextUrl.searchParams.get('endDate');

  if (!diseaseName || !startDate || !endDate) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const patients = await prisma.diagnoses.findMany({
      where: {
        disease: { disease_name: diseaseName },
        diagnosis_date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        patient: { select: { full_name: true, phone_number: true } },
        disease: { select: { disease_name: true } },
      },
    });

    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch disease report' }, { status: 500 });
  }
}