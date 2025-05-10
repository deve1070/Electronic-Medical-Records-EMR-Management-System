import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Fetching medications...');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'NURSE') {
      console.log('User is not a nurse:', session.user.role);
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const medications = await prisma.Medications.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    console.log(`Found ${medications.length} medications`);
    return NextResponse.json(medications);
  } catch (error) {
    console.error('Error fetching medications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medications' },
      { status: 500 }
    );
  }
} 