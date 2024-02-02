import { env } from '@/env/server.mjs';

import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from 'db';

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google({
    clientId: env.GOOGLE_ID,
    clientSecret: env.GOOGLE_SECRET,
    authorization: {
      params: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code'
      }
    },
  })],
});
