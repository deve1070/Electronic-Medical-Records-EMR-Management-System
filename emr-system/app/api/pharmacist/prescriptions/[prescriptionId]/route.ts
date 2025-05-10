import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { prescriptionId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== 'PHARMACIST') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const prescriptionId = parseInt(params.prescriptionId);
    if (isNaN(prescriptionId)) {
      return NextResponse.json({ error: 'Invalid prescription ID' }, { status: 400 });
    }

    const body = await request.json();
    const { status } = body;

    if (!['PENDING', 'FILLED', 'DISPENSED'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const prescription = await prisma.prescriptions.update({
      where: { prescription_id: prescriptionId },
      data: { status },
      include: {
        patient: {
          select: {
            full_name: true
          }
        }
      }
    });

    // Create system log
    await prisma.systemLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        action: 'UPDATE',
        details: `Updated prescription #${prescriptionId} status to ${status}`,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown'
      }
    });

    // Create access log
    await prisma.accessLogs.create({
      data: {
        user_id: parseInt(session.user.id),
        patient_id: prescription.patient_id,
        action: 'UPDATE',
        resource: 'PRESCRIPTION',
        details: `Updated prescription status for patient ${prescription.patient.full_name}`,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown'
      }
    });

    return NextResponse.json(prescription);
  } catch (error) {
    console.error('Error updating prescription:', error);
    return NextResponse.json({ error: 'Failed to update prescription' }, { status: 500 });
  }
} 