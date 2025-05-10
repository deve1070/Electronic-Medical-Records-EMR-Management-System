import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doctor Dashboard | MediCare EMR',
  description: 'Manage patient records, appointments, and prescriptions',
};

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 