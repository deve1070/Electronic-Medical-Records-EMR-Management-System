import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const reportType = searchParams.get('type');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!reportType) {
      return NextResponse.json(
        { error: 'Report type is required' },
        { status: 400 }
      );
    }

    let reportData;

    switch (reportType) {
      case 'disease-recovery':
        // Calculate average recovery time by disease
        reportData = await prisma.recoveryRecords.groupBy({
          by: ['disease_id'],
          _avg: {
            recovery_time: {
              // Calculate days between diagnosis and recovery
              // This is a simplified calculation
              // In a real system, you'd want to use proper date arithmetic
              // based on your database's capabilities
              select: {
                _count: {
                  select: {
                    _all: true,
                  },
                },
              },
            },
          },
          include: {
            disease: {
              select: {
                disease_name: true,
              },
            },
          },
        });
        break;

      case 'doctor-performance':
        // Get doctors with most closed cases
        reportData = await prisma.doctors.findMany({
          select: {
            user: {
              select: {
                full_name: true,
              },
            },
            specialty: true,
            _count: {
              select: {
                Cases: {
                  where: {
                    status: 'CLOSED',
                  },
                },
              },
            },
          },
          orderBy: {
            Cases: {
              _count: 'desc',
            },
          },
          take: 10,
        });
        break;

      case 'lab-statistics':
        // Get lab test statistics
        reportData = await prisma.labOrders.groupBy({
          by: ['test_type', 'status'],
          _count: {
            _all: true,
          },
          where: {
            created_at: {
              gte: startDate ? new Date(startDate) : undefined,
              lte: endDate ? new Date(endDate) : undefined,
            },
          },
        });
        break;

      case 'system-usage':
        // Get system usage statistics
        const [userLogins, patientAccess, labTests] = await Promise.all([
          prisma.systemLogs.count({
            where: {
              action: 'LOGIN',
              timestamp: {
                gte: startDate ? new Date(startDate) : undefined,
                lte: endDate ? new Date(endDate) : undefined,
              },
            },
          }),
          prisma.accessLogs.count({
            where: {
              resource: 'PATIENT',
              timestamp: {
                gte: startDate ? new Date(startDate) : undefined,
                lte: endDate ? new Date(endDate) : undefined,
              },
            },
          }),
          prisma.labOrders.count({
            where: {
              created_at: {
                gte: startDate ? new Date(startDate) : undefined,
                lte: endDate ? new Date(endDate) : undefined,
              },
            },
          }),
        ]);

        reportData = {
          userLogins,
          patientAccess,
          labTests,
        };
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid report type' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      reportType,
      data: reportData,
      dateRange: {
        startDate,
        endDate,
      },
    });
  } catch (error) {
    console.error('Error generating report:', error);
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
} 