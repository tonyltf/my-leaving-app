import { SignInButton } from '@/app/(components)/Button/SIgnInButton';
import { config } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getServerSession(config);
    if (session && session.user) {
        redirect('/dashboard');
    }
    return <SignInButton />;
}
