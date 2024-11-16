/*
  Warnings:

  - The primary key for the `auto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `auto` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "auto_patente_key";

-- AlterTable
ALTER TABLE "auto" DROP CONSTRAINT "auto_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "auto_pkey" PRIMARY KEY ("patente");
