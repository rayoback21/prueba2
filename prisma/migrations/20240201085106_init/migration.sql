-- CreateTable
CREATE TABLE "Construction" (
    "id" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "information" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "finalDate" TIMESTAMP(3),
    "countLastSee" INTEGER NOT NULL DEFAULT 1,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Construction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Construction_projectName_key" ON "Construction"("projectName");
