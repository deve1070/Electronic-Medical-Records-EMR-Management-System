import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nurse Dashboard | MediCare EMR',
  description: 'Manage patient care, vitals, and nursing tasks',
};

export default function NurseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 