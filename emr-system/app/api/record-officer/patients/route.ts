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

    console.log('Fetching patients for record officer...');
    const patients = await prisma.patients.findMany({
      select: {
        patient_id: true,
        full_name: true,
        date_of_birth: true,
        gender: true,
        phone_number: true,
        address: true,
        created_at: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log(`Found ${patients.length} patients`);
    return NextResponse.json(patients);
  } catch (error) {
    console.error('Detailed error in patients API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized - No session' }, { status: 401 });
    }

    if (session.user.role !== 'RECORD_OFFICER') {
      return NextResponse.json({ error: 'Unauthorized - Invalid role' }, { status: 401 });
    }

    const body = await request.json();
    const {
      full_name,
      date_of_birth,
      gender,
      phone_number,
      address,
      allergies,
    } = body;

    // Validate required fields
    if (!full_name || !date_of_birth || !gender || !phone_number || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if phone number already exists
    const existingPatient = await prisma.patients.findUnique({
      where: { phone_number },
    });

    if (existingPatient) {
      // If patient exists but is inactive, reactivate them
      if (!existingPatient.is_active) {
        const updatedPatient = await prisma.patients.update({
          where: { patient_id: existingPatient.patient_id },
          data: { is_active: true },
        });

        return NextResponse.json({
          message: 'Patient reactivated successfully',
          patient: updatedPatient,
        });
      }

      return NextResponse.json(
        { error: 'Phone number already registered' },
        { status: 400 }
      );
    }

    // Create new patient
    const patient = await prisma.patients.create({
      data: {
        full_name,
        date_of_birth: new Date(date_of_birth),
        gender,
        phone_number,
        address,
        allergies,
        is_active: true,
      },
    });

    return NextResponse.json({
      message: 'Patient registered successfully',
      patient,
    });
  } catch (error) {
    console.error('Error registering patient:', error);
    return NextResponse.json(
      { error: 'Failed to register patient' },
      { status: 500 }
    );
  }
} 