-- CreateTable
CREATE TABLE "initializations" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "initializations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "initializations" ADD CONSTRAINT "initializations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
