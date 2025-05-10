import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | MediCare EMR',
  description: 'Sign in to access your MediCare EMR account',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 