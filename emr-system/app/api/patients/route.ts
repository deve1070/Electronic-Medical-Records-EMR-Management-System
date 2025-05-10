import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { logAccess } from '@/lib/audit';
import { getToken } from 'next-auth/jwt';

export async function POST(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
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

        await logAccess(
          token.sub as unknown as number,
          updatedPatient.patient_id,
          'UPDATE',
          'PATIENT',
          'Reactivated existing patient'
        );

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

    // Log the access
    await logAccess(
      token.sub as unknown as number,
      patient.patient_id,
      'CREATE',
      'PATIENT',
      'Created new patient'
    );

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

export async function GET() {
  try {
    const patients = await prisma.patients.findMany({
      where: {
        status: 'ACTIVE',
      },
      orderBy: {
        registration_date: 'desc',
      },
    });

    return NextResponse.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
} 