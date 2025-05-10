import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized - No session' }, { status: 401 });
    }

    if (session.user.role !== 'RECORD_OFFICER') {
      console.log('Invalid role:', session.user.role);
      return NextResponse.json({ error: 'Unauthorized - Invalid role' }, { status: 401 });
    }

    console.log('Fetching records for record officer...');
    const records = await prisma.patients.findMany({
      select: {
        patient_id: true,
        full_name: true,
        date_of_birth: true,
        gender: true,
        phone_number: true,
        address: true,
        created_at: true,
        Cases: {
          select: {
            case_id: true,
            status: true,
            priority: true,
            created_at: true,
          },
          orderBy: {
            created_at: 'desc',
          },
          take: 5,
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log(`Found ${records.length} records`);
    return NextResponse.json(records);
  } catch (error) {
    console.error('Detailed error in records API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 