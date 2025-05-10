import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized - No session' }, { status: 401 });
    }

    if (session.user.role !== 'RECORD_OFFICER') {
      return NextResponse.json({ error: 'Unauthorized - Invalid role' }, { status: 401 });
    }

    const records = await prisma.medicalHistory.findMany({
      include: {
        patient: {
          select: {
            full_name: true,
          },
        },
        technician: {
          select: {
            full_name: true,
          },
        },
      },
      orderBy: {
        record_date: 'desc',
      },
    });

    return NextResponse.json(records);
  } catch (error) {
    console.error('Error fetching medical records:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medical records' },
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
    const { patient_id, notes, record_date } = body;

    // Validate required fields
    if (!patient_id || !notes || !record_date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify patient exists
    const patient = await prisma.patients.findUnique({
      where: { patient_id: parseInt(patient_id) },
    });

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Create medical record
    const record = await prisma.medicalHistory.create({
      data: {
        patient_id: parseInt(patient_id),
        technician_id: parseInt(session.user.id),
        record_date: new Date(record_date),
        notes,
      },
      include: {
        patient: {
          select: {
            full_name: true,
          },
        },
        technician: {
          select: {
            full_name: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: 'Medical record created successfully',
      record,
    });
  } catch (error) {
    console.error('Error creating medical record:', error);
    return NextResponse.json(
      { error: 'Failed to create medical record' },
      { status: 500 }
    );
  }
} 