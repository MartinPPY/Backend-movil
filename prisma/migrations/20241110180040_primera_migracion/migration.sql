-- CreateTable
CREATE TABLE "pasajero" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "pasajero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chofer" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "patente" TEXT NOT NULL,

    CONSTRAINT "chofer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pasajero_username_key" ON "pasajero"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pasajero_email_key" ON "pasajero"("email");

-- CreateIndex
CREATE UNIQUE INDEX "chofer_username_key" ON "chofer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "chofer_email_key" ON "chofer"("email");
