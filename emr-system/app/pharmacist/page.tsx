import { Metadata } from 'next';
import Dashboard from './dashboard';

export const metadata: Metadata = {
  title: 'Pharmacy Dashboard | MediCare EMR',
  description: 'Manage medications, prescriptions, and inventory',
};

export default function PharmacistPage() {
  return <Dashboard />;
}