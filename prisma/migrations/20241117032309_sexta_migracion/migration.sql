/*
  Warnings:

  - Added the required column `tipoUsuario` to the `conductor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoUsuario` to the `pasajero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "conductor" ADD COLUMN     "tipoUsuario" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pasajero" ADD COLUMN     "tipoUsuario" TEXT NOT NULL;
