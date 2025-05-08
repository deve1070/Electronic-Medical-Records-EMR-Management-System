import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../lib/prisma';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials?.password) {
            return null;
          }

          const user = await prisma.users.findUnique({
            where: { username: credentials.username },
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password_hash);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.user_id.toString(),
            name: user.full_name,
            role: user.role,
          };
        } catch (error) {
          console.error('Authorize error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id;
          token.role = user.role;
        }
        return token;
      } catch (error) {
        console.error('JWT callback error:', error);
        return token;
      }
    },
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.id = token.id;
          session.user.role = token.role;
        }
        return session;
      } catch (error) {
        console.error('Session callback error:', error);
        return session;
      }
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };