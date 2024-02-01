'use server';
import { getOrCreateAuthUser, getUserAuthenticator, updateUser } from '@/app/lib/dao/user.dao';
import {
    generateRegistrationOptions
} from '@simplewebauthn/server';


// Human-readable title for your website
const rpName = 'SimpleWebAuthn Example';
// A unique identifier for your website
const rpID = 'localhost';
// The URL at which registrations and authentications should occur
const origin = `https://${rpID}`;


export const generateOptions = async (formData: FormData) => {
    const email = formData.get('email')?.toString();
    if (!email) {
        throw new Error('Email is required');
    }
    const user = await getOrCreateAuthUser(email);
    const userAuthenticators = await getUserAuthenticator(user.id);
    const options = await generateRegistrationOptions({
        rpName,
        userID: user.id,
        userName: user.email,
        // Don't prompt users for additional information about the authenticator
        // (Recommended for smoother UX)
        attestationType: 'none',
        // Prevent users from re-registering existing authenticators
        excludeCredentials: userAuthenticators.map((authenticator) => ({
            id: authenticator.credential_id,
            type: 'public-key',
            // Optional
            transports: authenticator.transports,
        })),
        // See "Guiding use of authenticators via authenticatorSelection" below
        authenticatorSelection: {
            // Defaults
            residentKey: 'preferred',
            userVerification: 'preferred',
            // Optional
            authenticatorAttachment: 'platform',
        },
    });
    console.log({ options });

    await updateUser({
        id: user.id,
        data: {
            currentChallenge: options.challenge
        }
    });
    return options;
}

export const verifyRegistration = async (formData: FormData) => {

}
