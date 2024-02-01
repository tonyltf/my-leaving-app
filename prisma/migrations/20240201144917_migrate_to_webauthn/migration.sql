/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `credential` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CredentialDeviceType" AS ENUM ('singleDevice', 'multiDevice');

-- CreateEnum
CREATE TYPE "AuthenticatorTransport" AS ENUM ('usb', 'nfc', 'ble', 'internal');

-- DropForeignKey
ALTER TABLE "credential" DROP CONSTRAINT "credential_userId_fkey";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "current_challenge" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "credential";

-- CreateTable
CREATE TABLE "authenticator" (
    "credential_id" TEXT NOT NULL,
    "credential_public_key" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "credential_device_type" "CredentialDeviceType" NOT NULL,
    "credential_backed_up" BOOLEAN NOT NULL,
    "transports" "AuthenticatorTransport"[],

    CONSTRAINT "authenticator_pkey" PRIMARY KEY ("credential_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authenticator_credential_public_key_key" ON "authenticator"("credential_public_key");
