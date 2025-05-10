import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab Technician Dashboard | MediCare EMR',
  description: 'Manage lab tests, equipment, and test results',
};

export default function TechnicianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 