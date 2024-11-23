/*
  Warnings:

  - Added the required column `destino` to the `viaje` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salida` to the `viaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "viaje" ADD COLUMN     "destino" TEXT NOT NULL,
ADD COLUMN     "salida" TEXT NOT NULL;
