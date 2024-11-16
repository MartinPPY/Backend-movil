/*
  Warnings:

  - You are about to drop the `chofer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pasajero` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "chofer";

-- DropTable
DROP TABLE "pasajero";

-- CreateTable
CREATE TABLE "auto" (
    "id" SERIAL NOT NULL,
    "patente" TEXT NOT NULL,
    "marca" TEXT NOT NULL,

    CONSTRAINT "auto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auto_patente_key" ON "auto"("patente");

-- CreateIndex
CREATE UNIQUE INDEX "auto_marca_key" ON "auto"("marca");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "auto" ADD CONSTRAINT "auto_id_fkey" FOREIGN KEY ("id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
