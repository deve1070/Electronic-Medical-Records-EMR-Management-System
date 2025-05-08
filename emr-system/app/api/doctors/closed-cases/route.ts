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

  const year = request.nextUrl.searchParams.get('year');
  if (!year || isNaN(parseInt(year))) {
    return NextResponse.json({ error: 'Valid year required' }, { status: 400 });
  }

  try {
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const doctors = await prisma.doctors.findMany({
      include: {
        user: { select: { full_name: true } },
        Cases: {
          where: {
            status: 'Closed',
            case_date: {
              gte: startDate,
              lte: endDate,
            },
          },
        },
      },
    });

    const result = doctors
      .map((doctor) => ({
        full_name: doctor.user.full_name,
        specialty: doctor.specialty,
        closed_cases: doctor.Cases.length,
      }))
      .sort((a, b) => b.closed_cases - a.closed_cases);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch top doctors' }, { status: 500 });
  }
}