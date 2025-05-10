import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { startOfMonth, subMonths, format } from 'date-fns';

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

    // Get total patients
    const totalPatients = await prisma.patients.count();

    // Get new registrations (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newRegistrations = await prisma.patients.count({
      where: {
        created_at: {
          gte: thirtyDaysAgo,
        },
      },
    });

    // Get active and completed cases
    const activeCases = await prisma.cases.count({
      where: {
        status: 'ACTIVE',
      },
    });

    const completedCases = await prisma.cases.count({
      where: {
        status: 'COMPLETED',
      },
    });

    // Get lab test statistics
    const labTests = await prisma.labOrders.findMany({
      select: {
        status: true,
      },
    });

    const labTestStats = {
      total: labTests.length,
      pending: labTests.filter(test => test.status === 'PENDING').length,
      completed: labTests.filter(test => test.status === 'COMPLETED').length,
    };

    // Get top diagnoses
    const diagnoses = await prisma.diagnoses.groupBy({
      by: ['disease_id'],
      _count: {
        disease_id: true,
      },
      orderBy: {
        _count: {
          disease_id: 'desc',
        },
      },
      take: 5,
    });

    const diseaseNames = await prisma.diseases.findMany({
      where: {
        disease_id: {
          in: diagnoses.map(d => d.disease_id),
        },
      },
      select: {
        disease_id: true,
        disease_name: true,
      },
    });

    const diagnosesByDisease = diagnoses.map(d => ({
      disease: diseaseNames.find(n => n.disease_id === d.disease_id)?.disease_name || 'Unknown',
      count: d._count.disease_id,
    }));

    // Get monthly statistics for the last 6 months
    const monthlyStats = await Promise.all(
      Array.from({ length: 6 }, (_, i) => {
        const monthStart = startOfMonth(subMonths(new Date(), i));
        const monthEnd = startOfMonth(subMonths(new Date(), i - 1));

        return Promise.all([
          prisma.patients.count({
            where: {
              created_at: {
                gte: monthStart,
                lt: monthEnd,
              },
            },
          }),
          prisma.cases.count({
            where: {
              created_at: {
                gte: monthStart,
                lt: monthEnd,
              },
              status: 'ACTIVE',
            },
          }),
        ]).then(([newPatients, activeCases]) => ({
          month: format(monthStart, 'MMMM yyyy'),
          newPatients,
          activeCases,
        }));
      })
    );

    const reportData = {
      totalPatients,
      newRegistrations,
      activeCases,
      completedCases,
      labTests: labTestStats,
      diagnoses: {
        total: diagnosesByDisease.reduce((sum, d) => sum + d.count, 0),
        byDisease: diagnosesByDisease,
      },
      monthlyStats,
    };

    console.log('Generated report data');
    return NextResponse.json(reportData);
  } catch (error) {
    console.error('Detailed error in reports API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 