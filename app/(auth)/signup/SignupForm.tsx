"use client"
import { startRegistration } from '@simplewebauthn/browser';

import clsx from 'clsx';
import { generateOptions, verifyRegistration } from "./webAuthn";

// import { useRouter } from "next/router";

export default function SignupForm() {
    // const router = useRouter();

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      try {
        const result = await generateOptions(formData);
        console.log({ result });
        const attResp = await startRegistration(result);
        await verifyRegistration(attResp)

      } catch (error) {
        console.error(error);
      }
    };

    return (<>
      <h1>Sign-up</h1>
        <form method="POST" onSubmit={handleFormSubmit}>
          <input type="text" name="email" placeholder="Email" className={clsx("bg-slate-500")} />
          <input type="submit" value="Register" className={clsx(
                'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          )} />
        </form>
    </>);
}