import type { SessionOptions } from 'iron-session';

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD!,
    cookieName: 'next-webauthn',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};

// Define the cookie structure globally for TypeScript
declare module 'iron-session' {
  interface IronSessionData {
    userId?: number;
    challenge?: string;
  }
}