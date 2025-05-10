import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { patient_id, doctor_id, condition, notes, severity } = body;

    const diagnosis = await prisma.diagnoses.create({
      data: {
        patient_id,
        doctor_id,
        disease_id: 1, // Default disease ID, you might want to make this dynamic
        condition,
        notes,
        severity,
      },
    });

    return NextResponse.json(diagnosis);
  } catch (error) {
    console.error('Error creating diagnosis:', error);
    return NextResponse.json(
      { error: 'Failed to create diagnosis' },
      { status: 500 }
    );
  }
} 