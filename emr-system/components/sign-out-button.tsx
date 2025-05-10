'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // First, sign out from NextAuth
      await signOut({ 
        redirect: false 
      });
      
      // Then, manually redirect to home page
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error signing out:', error);
      // If there's an error, try to force redirect to home page
      router.push('/');
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleSignOut}
      className="text-gray-600 hover:text-gray-900"
    >
      Sign Out
    </Button>
  );
} 