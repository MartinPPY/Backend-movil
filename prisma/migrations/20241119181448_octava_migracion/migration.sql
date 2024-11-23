/*
  Warnings:

  - You are about to drop the column `fechatermino` on the `viaje` table. All the data in the column will be lost.
  - You are about to drop the column `horatermino` on the `viaje` table. All the data in the column will be lost.
  - You are about to drop the column `pasajero` on the `viaje` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "viaje" DROP COLUMN "fechatermino",
DROP COLUMN "horatermino",
DROP COLUMN "pasajero";
