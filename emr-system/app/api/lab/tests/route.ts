import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

interface LabTest {
  test_id: number;
  name: string;
  description: string;
  equipment_required: string;
  estimated_duration: string;
  status: string;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'TECHNICIAN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const tests = await prisma.LabTest.findMany({
      select: {
        test_id: true,
        name: true,
        description: true,
        equipment_required: true,
        estimated_duration: true,
        status: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    // Parse the equipment_required JSON string for each test
    const formattedTests = tests.map((test: LabTest) => ({
      ...test,
      equipment_required: JSON.parse(test.equipment_required)
    }));

    return NextResponse.json(formattedTests);
  } catch (error) {
    console.error('Error fetching lab tests:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 