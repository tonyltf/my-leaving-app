// import { env } from '@/env/server.mjs';
// import { Pool, neonConfig } from '@neondatabase/serverless';
// import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
;

const prismaClientSingleton = () => {
    return new PrismaClient().$extends(withAccelerate())
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
/*
neonConfig.webSocketConstructor = ws;
const connectionString = `${env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
*/

