'use client';

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      await signOut({ 
        redirect: false,
        callbackUrl: '/auth/signin'
      });
      router.push('/auth/signin');
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
} 