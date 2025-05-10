import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Add paths that don't require authentication
const publicPaths = ['/', '/auth/signin', '/auth/signup'];

// Define user roles type
type UserRole = 'ADMIN' | 'DOCTOR' | 'NURSE' | 'PHARMACIST' | 'TECHNICIAN';

// Define role-based paths
const roleBasedPaths: Record<UserRole, string> = {
  ADMIN: '/admin',
  DOCTOR: '/doctor',
  NURSE: '/nurse',
  PHARMACIST: '/pharmacist',
  TECHNICIAN: '/technician',
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Allow access to public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect to sign in if not authenticated
  if (!token) {
    const url = new URL('/auth/signin', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Role-based access control
  const role = token.role as UserRole;

  // If user is on home page, redirect to their role-specific page
  if (pathname === '/') {
    return NextResponse.redirect(new URL(roleBasedPaths[role] || '/unauthorized', request.url));
  }

  // Check if user has access to the requested path
  const userRolePath = roleBasedPaths[role];
  if (userRolePath && !pathname.startsWith(userRolePath)) {
    return NextResponse.redirect(new URL(userRolePath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 