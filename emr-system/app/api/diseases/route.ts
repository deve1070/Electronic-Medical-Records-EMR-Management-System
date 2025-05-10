import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const diseases = await prisma.diseases.findMany({
      select: {
        disease_id: true,
        disease_name: true,
        description: true,
        icd_code: true
      },
      orderBy: {
        disease_name: 'asc'
      }
    });

    return NextResponse.json(diseases);
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 