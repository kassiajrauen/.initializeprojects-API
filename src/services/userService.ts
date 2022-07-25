import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export async function signUp(user: userRepository.userData) {
  const exist = await userRepository.findByEmail(user.email);
  if (exist)
    throw { type: "conflict", message: "This email is already in use" };

  const passwordHash = bcrypt.hashSync(user.password, 12);

  await userRepository.create({ ...user, password: passwordHash });
}

export async function login(user: userRepository.userData) {
  const { email, password } = user;

  const userExist = await userRepository.findByEmail(email);
  const comparePassword = bcrypt.compare(password, userExist.password);
  if (!userExist || !comparePassword)
    throw { type: "unauthorized", message: "Incorrect email or password" };

  const session = await sessionRepository.findByUserId(userExist.id);
  if (session) {
    try {
      const key = process.env.JWT_KEY;
      jwt.verify(session.token, key);

      return { token: session.token };
    } catch (error) {
      console.log(error);
      throw { type: "unauthorized", message: "Invalid session token" };
    }
  }

  const key = process.env.JWT_KEY;
  const token = jwt.sign(email, key);
  await sessionRepository.create({
    token,
    userId: userExist.id,
  });

  return token;
}

export async function logout(token: string) {
  const { id } = (await sessionRepository.findByToken(token)) as { id: number };

  await sessionRepository.remove(id);
}
