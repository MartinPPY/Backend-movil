/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "auto" DROP CONSTRAINT "auto_id_fkey";

-- DropIndex
DROP INDEX "auto_marca_key";

-- AlterTable
ALTER TABLE "auto" ADD COLUMN     "conductor" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "conductor" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "auto" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "conductor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pasajero" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "pasajero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "viaje" (
    "id" SERIAL NOT NULL,
    "fechainicio" TEXT NOT NULL,
    "horainicio" TEXT NOT NULL,
    "fechatermino" TEXT NOT NULL,
    "horatermino" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "conductor" INTEGER NOT NULL,
    "pasajero" INTEGER NOT NULL,

    CONSTRAINT "viaje_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "conductor_username_key" ON "conductor"("username");

-- CreateIndex
CREATE UNIQUE INDEX "conductor_email_key" ON "conductor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "conductor_password_key" ON "conductor"("password");

-- CreateIndex
CREATE UNIQUE INDEX "pasajero_username_key" ON "pasajero"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pasajero_email_key" ON "pasajero"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pasajero_password_key" ON "pasajero"("password");
