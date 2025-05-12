import { Metadata } from 'next';
import SignInForm from '../../../components/auth/signin-form';

export const metadata: Metadata = {
  title: 'Sign In | MediCare EMR',
  description: 'Sign in to access your MediCare EMR account',
};

export default function SignInPage() {
  return <SignInForm />;
} 