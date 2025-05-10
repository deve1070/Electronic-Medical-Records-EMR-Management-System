import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Fetching vital signs...');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'NURSE') {
      console.log('User is not a nurse:', session.user.role);
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // For now, return mock data since we don't have a vitals table
    const mockVitals = [
      {
        vital_id: 1,
        patient_id: 1,
        patient_name: 'Negussie Worku',
        temperature: 37.2,
        blood_pressure: '120/80',
        heart_rate: 72,
        respiratory_rate: 16,
        oxygen_saturation: 98,
        recorded_at: new Date().toISOString()
      },
      {
        vital_id: 2,
        patient_id: 2,
        patient_name: 'Bekele Demeke',
        temperature: 36.8,
        blood_pressure: '118/78',
        heart_rate: 68,
        respiratory_rate: 14,
        oxygen_saturation: 99,
        recorded_at: new Date().toISOString()
      }
    ];

    console.log(`Returning ${mockVitals.length} vital signs records`);
    return NextResponse.json(mockVitals);
  } catch (error) {
    console.error('Error fetching vital signs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vital signs' },
      { status: 500 }
    );
  }
} 