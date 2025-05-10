import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Fetching patients...');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'NURSE') {
      console.log('User is not a nurse:', session.user.role);
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const patients = await prisma.patients.findMany({
      where: {
        is_active: true
      },
      orderBy: {
        full_name: 'asc'
      }
    });

    console.log(`Found ${patients.length} patients`);
    return NextResponse.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
} 