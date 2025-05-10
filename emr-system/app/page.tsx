import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Welcome | MediCare EMR',
  description: 'Electronic Medical Records Management System',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to MediCare EMR</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Your comprehensive Electronic Medical Records Management System
        </p>
        <div className="space-x-4">
          <Link href="/auth/signin">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
