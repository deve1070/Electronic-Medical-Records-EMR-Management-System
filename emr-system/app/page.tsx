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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to EMR System</h1>
      <p className="text-lg mb-8">Your trusted platform for electronic medical records management.</p>
      <div className="flex space-x-4">
        <Image src="/health-icon.png" alt="Health Icon" width={100} height={100} />
        <Image src="/medical-icon.png" alt="Medical Icon" width={100} height={100} />
      </div>
      <Link href="/auth/signin">
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sign In
        </button>
      </Link>
    </div>
  );
}
