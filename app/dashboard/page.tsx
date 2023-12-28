import { getServerSession } from 'next-auth';
import { config } from '../api/auth/[...nextauth]/auth';
import { SignOutButton } from '../(components)/Button/SIgnOutButton';
import { redirect } from 'next/navigation';
import { serverClient } from '../_trpc/serverClient';

export default async function Page() {
    const session = await getServerSession(config);
    const { greeting } = await serverClient.hello({ text: session?.user?.name ?? 'Guest' });
    if (session && session.user) {
        console.log('session.user', session?.user);

        return (
            <>
                {greeting}
                <SignOutButton />
            </>
        );
    }
    redirect('/login');
}
