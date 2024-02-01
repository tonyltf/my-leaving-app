'use client';
import { signIn } from 'next-auth/react';
import { Button } from './Button';

const SignInButton = () => {
    return <Button onClick={() => signIn()}>Other Sign In Method</Button>;
};

export { SignInButton };
