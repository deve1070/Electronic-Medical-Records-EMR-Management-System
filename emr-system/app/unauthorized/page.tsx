'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function UnauthorizedPage() {
  const router = useRouter();

  const handleReturnHome = () => {
    console.log('Unauthorized page - Attempting to return home');
    // Clear any stored redirect URLs
    sessionStorage.removeItem('redirectUrl');
    // Use replace to prevent back button from returning to unauthorized page
    window.location.replace('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <Button
          onClick={handleReturnHome}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
} 