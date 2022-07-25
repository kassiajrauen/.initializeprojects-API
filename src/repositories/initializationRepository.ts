import { prisma } from "../database.js";

export interface Initialization {
  id: number;
  title: string;
  description: string;
  userId: number;
}

export type initializationData = Omit<Initialization, "id">;

export async function create(initialization: initializationData) {
  const { title, description, userId } = initialization;

  return await prisma.initialization.create({
    data: { title, description, userId },
  });
}

export async function getAll(userId: number) {
  return await prisma.initialization.findMany({
    where: { userId },
  });
}

export async function remove(id: number) {
  return await prisma.initialization.delete({
    where: { id },
  });
}
