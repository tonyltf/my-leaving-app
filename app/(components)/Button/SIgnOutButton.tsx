'use client';
import { signOut } from 'next-auth/react';
import { Button } from './Button';

const SignOutButton = () => {
    return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export { SignOutButton };
