import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Fetching due medications...');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'NURSE') {
      console.log('User is not a nurse:', session.user.role);
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const oneHourFromNow = new Date(Date.now() + 60 * 60 * 1000);
    const dueMedications = await prisma.prescriptions.findMany({
      where: {
        status: 'ACTIVE',
        created_at: {
          lte: oneHourFromNow
        }
      },
      include: {
        patient: {
          select: {
            full_name: true
          }
        }
      },
      orderBy: {
        created_at: 'asc'
      }
    });

    const formattedMedications = dueMedications.map(med => ({
      prescription_id: med.prescription_id,
      patient_id: med.patient_id,
      patient_name: med.patient.full_name,
      medication: med.medication,
      dosage: med.dosage,
      instructions: med.instructions,
      due_time: med.created_at
    }));

    console.log(`Found ${formattedMedications.length} due medications`);
    return NextResponse.json(formattedMedications);
  } catch (error) {
    console.error('Error fetching due medications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch due medications' },
      { status: 500 }
    );
  }
} 