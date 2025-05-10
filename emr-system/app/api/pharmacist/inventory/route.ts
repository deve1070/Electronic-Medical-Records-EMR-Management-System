import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Medications } from '@prisma/client';

interface InventoryStats {
  totalItems: number;
  lowStockCount: number;
  expiringCount: number;
  lowStockItems: Array<{
    id: number;
    name: string;
    quantity: number;
    minQuantity: number;
  }>;
  expiringItems: Array<{
    id: number;
    name: string;
    expiryDate: Date;
    quantity: number;
  }>;
}

export async function GET() {
  try {
    console.log('Fetching inventory data...');
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      console.log('No session found');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'PHARMACIST') {
      console.log('User is not a pharmacist:', session.user.role);
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    console.log('Fetching medications from database...');
    // Get inventory status using Prisma's findMany
    const medications = await prisma.medications.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    console.log('Found medications:', medications.length);

    // Calculate inventory statistics
    const totalItems = medications.length;
    const lowStockItems = medications.filter((item: Medications) => item.quantity <= item.min_quantity);
    const expiringItems = medications.filter((item: Medications) => {
      const expiryDate = new Date(item.expiry_date);
      const thirtyDaysFromNow = new Date();
      thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
      return expiryDate <= thirtyDaysFromNow;
    });

    console.log('Low stock items:', lowStockItems.length);
    console.log('Expiring items:', expiringItems.length);

    const inventoryStats: InventoryStats = {
      totalItems,
      lowStockCount: lowStockItems.length,
      expiringCount: expiringItems.length,
      lowStockItems: lowStockItems.map((item: Medications) => ({
        id: item.medication_id,
        name: item.name,
        quantity: item.quantity,
        minQuantity: item.min_quantity,
      })),
      expiringItems: expiringItems.map((item: Medications) => ({
        id: item.medication_id,
        name: item.name,
        expiryDate: item.expiry_date,
        quantity: item.quantity,
      })),
    };

    console.log('Returning inventory stats');
    return NextResponse.json(inventoryStats);
  } catch (error) {
    console.error('Error in inventory API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch inventory data' },
      { status: 500 }
    );
  }
} 