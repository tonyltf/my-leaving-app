/*
  Warnings:

  - The primary key for the `authenticator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `credential_id` on the `authenticator` table. All the data in the column will be lost.
  - Added the required column `credentialId` to the `authenticator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authenticator" DROP CONSTRAINT "authenticator_pkey",
DROP COLUMN "credential_id",
ADD COLUMN     "credentialId" TEXT NOT NULL,
ADD CONSTRAINT "authenticator_pkey" PRIMARY KEY ("credentialId");
