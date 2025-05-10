import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import { logAccess } from '@/lib/audit';
import { getToken } from 'next-auth/jwt';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const patient = await prisma.patients.findUnique({
      where: { patient_id: parseInt(params.id) },
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    const medicalRecords = await prisma.medicalHistory.findMany({
      where: { patient_id: parseInt(params.id) },
      include: {
        technician: {
          select: {
            full_name: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    // Log the access
    await logAccess(
      token.sub as unknown as number,
      patient.patient_id,
      'VIEW',
      'PATIENT',
      'Viewed patient details'
    );

    return NextResponse.json({
      patient,
      medicalRecords,
    });
  } catch (error) {
    console.error('Error fetching patient details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patient details' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const token = await getToken({ req: request });
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { is_active } = body;

    if (typeof is_active !== 'boolean') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const patient = await prisma.patients.findUnique({
      where: { patient_id: parseInt(params.id) },
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    const updatedPatient = await prisma.patients.update({
      where: { patient_id: parseInt(params.id) },
      data: { is_active },
    });

    // Log the access
    await logAccess(
      token.sub as unknown as number,
      patient.patient_id,
      'UPDATE',
      'PATIENT',
      is_active ? 'Reactivated patient' : 'Deactivated patient'
    );

    return NextResponse.json({
      message: is_active ? 'Patient reactivated successfully' : 'Patient deactivated successfully',
      patient: updatedPatient,
    });
  } catch (error) {
    console.error('Error updating patient:', error);
    return NextResponse.json(
      { error: 'Failed to update patient' },
      { status: 500 }
    );
  }
} 