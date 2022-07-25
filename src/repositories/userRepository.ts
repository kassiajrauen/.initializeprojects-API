import { prisma } from "../database.js";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type userData = Omit<User, "id">;

export async function create(user: userData) {
  const { name, email, password } = user;

  return prisma.user.create({
    data: { name, email, password },
  });
}

export async function findByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}
