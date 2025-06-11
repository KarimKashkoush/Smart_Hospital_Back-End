/*
  Warnings:

  - You are about to drop the column `medicalRecordId` on the `Rating` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_medicalRecordId_fkey";

-- DropIndex
DROP INDEX "Rating_medicalRecordId_key";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "medicalRecordId";
