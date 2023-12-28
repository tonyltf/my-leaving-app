import { env } from '@/env/server.mjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { config } from './auth';

const handler = NextAuth(config);

export { handler as GET, handler as POST };
