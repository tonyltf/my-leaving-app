import { SignOutButton } from '../(components)/Button/SIgnOutButton';
import { redirect } from 'next/navigation';
import { serverClient } from '../_trpc/serverClient';
import { auth } from '../auth';

export default async function Page() {
    const session = await auth();
    console.log({ session });
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
