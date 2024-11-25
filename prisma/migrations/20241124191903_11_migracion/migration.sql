-- CreateTable
CREATE TABLE "solicitud" (
    "id" SERIAL NOT NULL,
    "salida" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "fechainicio" TEXT NOT NULL,
    "horainicio" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "conductor" TEXT NOT NULL,
    "pasajero" TEXT NOT NULL,

    CONSTRAINT "solicitud_pkey" PRIMARY KEY ("id")
);
