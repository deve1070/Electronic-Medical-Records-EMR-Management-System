'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './login-form';
import LoginSidebar from './login-sidebar';
import ThemeToggle from './theme-toggle';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <LoginSidebar />
      
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>
        
        <div className="w-full max-w-md space-y-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}