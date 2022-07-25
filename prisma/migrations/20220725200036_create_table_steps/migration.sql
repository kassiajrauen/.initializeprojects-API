-- CreateTable
CREATE TABLE "steps" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "initialzeId" INTEGER NOT NULL,

    CONSTRAINT "steps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "steps" ADD CONSTRAINT "steps_initialzeId_fkey" FOREIGN KEY ("initialzeId") REFERENCES "initializations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
