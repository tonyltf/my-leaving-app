import { Prisma } from '@prisma/client';
import prisma from '../db';

const userAuthInfo = {
    id: true,
    name: true,
    email: true,
} satisfies Prisma.UserSelect;

export type UserBasicInfo = Prisma.UserGetPayload<{ select: typeof userAuthInfo }>;

export const getOrCreateAuthUser = async (email: string): Promise<UserBasicInfo> => {
    const user = await prisma.user.findUnique<UserBasicInfo>({
        where: { email },
        select: userAuthInfo,
    })
    return user ?? prisma.user.create<UserBasicInfo>({
        data: { email, updatedAt: new Date() },
        select: userAuthInfo,
    })
}

export const updateUser = async ({ id, data }: { id: string, data: Prisma.UserUpdateInput }): Promise<void> => prisma.user.update({ data, where: { id } });

export const getUserAuthenticator = async (userId: string): Promise<Prisma.AuthenticatorSelect[]> => {
    return prisma.authenticator.findMany({
        select: {
            credentialId: true,
            transports: true,
        },
        where: {
            userId,
        }
    });
}