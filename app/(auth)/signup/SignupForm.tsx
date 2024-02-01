"use client"
import { startRegistration } from '@simplewebauthn/browser';

import { generateOptions } from "./registerOption";

// import { useRouter } from "next/router";

export default function SignupForm() {
    // const router = useRouter();

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      try {
        const result = await generateOptions(formData);
        console.log({ result });
        await startRegistration(result);

      } catch (error) {
        console.error(error);
      }
    };

    return (<>
      <h1>Sign-up</h1>
        <form method="POST" onSubmit={handleFormSubmit}>
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Register" />
        </form>
    </>);
}