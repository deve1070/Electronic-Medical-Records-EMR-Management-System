'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SignOutButton } from './sign-out-button';

const navigation = {
  ADMIN: [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Diseases', href: '/admin/disease' },
  ],
  DOCTOR: [
    { name: 'Dashboard', href: '/doctor' },
    { name: 'Patients', href: '/doctor/patients' },
    { name: 'Prescriptions', href: '/doctor/prescriptions' },
  ],
  NURSE: [
    { name: 'Dashboard', href: '/nurse' },
    { name: 'Vitals', href: '/nurse/vitals' },
    { name: 'Patients', href: '/nurse/patients' },
  ],
  PHARMACIST: [
    { name: 'Dashboard', href: '/pharmacist' },
    { name: 'Prescriptions', href: '/pharmacist/prescriptions' },
    { name: 'Inventory', href: '/pharmacist/inventory' },
  ],
  TECHNICIAN: [
    { name: 'Dashboard', href: '/technician' },
    { name: 'Lab Tests', href: '/technician/lab-tests' },
    { name: 'Results', href: '/technician/results' },
  ],
  RECORD_OFFICER: [
    { name: 'Dashboard', href: '/record-officer' },
    { name: 'Records', href: '/record-officer/records' },
    { name: 'Reports', href: '/record-officer/reports' },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navItems = session?.user?.role ? navigation[session.user.role as keyof typeof navigation] || [] : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {session?.user && (
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-xl font-bold text-blue-600">
                    MediCare
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                        pathname === item.href
                          ? 'border-blue-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">
                  {session.user.name}
                </span>
                <SignOutButton />
              </div>
            </div>
          </div>
        </nav>
      )}

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 