import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'NURSE') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get all patients with their cases
    const patients = await prisma.patients.findMany({
      include: {
        Cases: {
          include: {
            doctor: {
              include: {
                user: {
                  select: {
                    full_name: true
                  }
                }
              }
            }
          },
          orderBy: {
            created_at: 'desc'
          }
        },
        Diagnoses: {
          include: {
            disease: true
          },
          orderBy: {
            created_at: 'desc'
          },
          take: 1
        }
      },
      orderBy: {
        full_name: 'asc'
      }
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