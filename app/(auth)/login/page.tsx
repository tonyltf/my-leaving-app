import { SignInButton } from '@/app/(components)/Button/SIgnInButton';
import { auth } from '@/app/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await auth();
    if (session?.user) {
        redirect('/dashboard');
    }
    return <SignInButton />;
}
