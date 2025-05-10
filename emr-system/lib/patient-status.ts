import prisma from './prisma';
import { logAccess } from './audit';

export async function activatePatient(
  patientId: number,
  userId: number
): Promise<void> {
  try {
    await prisma.patients.update({
      where: { patient_id: patientId },
      data: { is_active: true },
    });

    await logAccess(userId, patientId, 'UPDATE', 'PATIENT', 'Patient activated');
  } catch (error) {
    console.error('Error activating patient:', error);
    throw error;
  }
}

export async function deactivatePatient(
  patientId: number,
  userId: number
): Promise<void> {
  try {
    await prisma.patients.update({
      where: { patient_id: patientId },
      data: { is_active: false },
    });

    await logAccess(userId, patientId, 'UPDATE', 'PATIENT', 'Patient deactivated');
  } catch (error) {
    console.error('Error deactivating patient:', error);
    throw error;
  }
}

export async function findPatientByPhone(phoneNumber: string) {
  try {
    const patient = await prisma.patients.findUnique({
      where: { phone_number: phoneNumber },
      include: {
        MedicalHistory: {
          orderBy: { record_date: 'desc' },
          take: 1,
        },
        Cases: {
          where: { status: 'ACTIVE' },
          include: {
            doctor: {
              include: {
                user: {
                  select: {
                    full_name: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return patient;
  } catch (error) {
    console.error('Error finding patient by phone:', error);
    throw error;
  }
}

export async function getPatientStatus(patientId: number) {
  try {
    const patient = await prisma.patients.findUnique({
      where: { patient_id: patientId },
      include: {
        Cases: {
          where: { status: 'ACTIVE' },
          include: {
            doctor: {
              include: {
                user: {
                  select: {
                    full_name: true,
                  },
                },
              },
            },
          },
        },
        LabOrders: {
          where: {
            status: {
              in: ['PENDING', 'IN_PROGRESS'],
            },
          },
          include: {
            LabResults: true,
          },
        },
        Prescriptions: {
          where: {
            status: {
              in: ['PENDING', 'FILLED'],
            },
          },
        },
      },
    });

    if (!patient) {
      throw new Error('Patient not found');
    }

    return {
      isActive: patient.is_active,
      currentCase: patient.Cases[0] || null,
      pendingLabTests: patient.LabOrders.filter(
        (order) => order.status === 'PENDING'
      ),
      inProgressLabTests: patient.LabOrders.filter(
        (order) => order.status === 'IN_PROGRESS'
      ),
      pendingPrescriptions: patient.Prescriptions.filter(
        (prescription) => prescription.status === 'PENDING'
      ),
      filledPrescriptions: patient.Prescriptions.filter(
        (prescription) => prescription.status === 'FILLED'
      ),
    };
  } catch (error) {
    console.error('Error getting patient status:', error);
    throw error;
  }
}

export async function getAvailableDoctors() {
  try {
    const doctors = await prisma.doctors.findMany({
      where: {
        is_available: true,
        user: {
          is_active: true,
        },
      },
      include: {
        user: {
          select: {
            full_name: true,
          },
        },
      },
    });

    return doctors;
  } catch (error) {
    console.error('Error getting available doctors:', error);
    throw error;
  }
} 