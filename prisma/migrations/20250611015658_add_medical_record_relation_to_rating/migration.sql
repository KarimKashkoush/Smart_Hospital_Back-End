/*
  Warnings:

  - A unique constraint covering the columns `[medicalRecordId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `medicalRecordId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "medicalRecordId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rating_medicalRecordId_key" ON "Rating"("medicalRecordId");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
