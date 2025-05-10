import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    if (action && action !== 'all') {
      where.action = action;
    }
    if (search) {
      where.OR = [
        { details: { contains: search } },
        { resource: { contains: search } },
        { user: { full_name: { contains: search } } },
      ];
    }

    // Get audit logs with pagination
    const [logs, total] = await Promise.all([
      prisma.accessLogs.findMany({
        where,
        include: {
          user: {
            select: {
              full_name: true,
              username: true,
            },
          },
        },
        orderBy: {
          timestamp: 'desc',
        },
        skip,
        take: limit,
      }),
      prisma.accessLogs.count({ where }),
    ]);

    return NextResponse.json({
      logs,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching audit logs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit logs' },
      { status: 500 }
    );
  }
} 