import './globals.css';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import Link from 'next/link';

// Fallback to system fonts if Inter fails
const inter = Inter({ subsets: ['latin'], fallback: ['system-ui', 'Arial', 'sans-serif'] });

export const metadata = {
  title: 'EMR Management System',
  description: 'Electronic Medical Records Management System',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              EMR System
            </Link>
            <div className="space-x-4">
              {session ? (
                <>
                  {session.user.role === 'record_officer' && (
                    <>
                      <Link href="/patients/search">Search Patients</Link>
                      <Link href="/patients/add">Add Patient</Link>
                    </>
                  )}
                  {session.user.role === 'doctor' && (
                    <>
                      <Link href="/doctor/patients">Patients</Link>
                      <Link href="/doctor/diagnose">Diagnose</Link>
                    </>
                  )}
                  {session.user.role === 'lab_tech' && (
                    <>
                      <Link href="/lab/orders">Lab Orders</Link>
                      <Link href="/lab/upload">Upload Results</Link>
                    </>
                  )}
                  {session.user.role === 'admin' && (
                    <>
                      <Link href="/admin/disease">Disease Report</Link>
                      <Link href="/admin/doctors">Top Doctors</Link>
                      <Link href="/admin/access-logs">Access Logs</Link>
                    </>
                  )}
                  <Link href="/api/auth/signout">Sign Out</Link>
                </>
              ) : (
                <Link href="/auth/signin">Sign In</Link>
              )}
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  );
}