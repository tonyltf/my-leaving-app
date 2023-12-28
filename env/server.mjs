// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NEXTAUTH_SECRET: z.string(),
        GOOGLE_ID: z.string(),
        GOOGLE_SECRET: z.string(),
        DATABASE_URL: z.string(),
    },
    runtimeEnv: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
    },
});
