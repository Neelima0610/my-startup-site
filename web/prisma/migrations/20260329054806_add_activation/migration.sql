-- AlterTable
ALTER TABLE "License" ADD COLUMN     "maxActivations" INTEGER NOT NULL DEFAULT 2;

-- CreateTable
CREATE TABLE "Activation" (
    "id" TEXT NOT NULL,
    "licenseKey" TEXT NOT NULL,
    "machineId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activation_licenseKey_machineId_key" ON "Activation"("licenseKey", "machineId");

-- AddForeignKey
ALTER TABLE "Activation" ADD CONSTRAINT "Activation_licenseKey_fkey" FOREIGN KEY ("licenseKey") REFERENCES "License"("key") ON DELETE RESTRICT ON UPDATE CASCADE;
