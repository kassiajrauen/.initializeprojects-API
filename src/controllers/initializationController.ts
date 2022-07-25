import { Request, Response } from "express";
import * as initializationService from "../services/initializationServices.js";

export async function createInitialization(req: Request, res: Response) {
  const initialization = req.body;

  await initializationService.createInitialization({
    ...initialization,
    userId: res.locals.user.userId,
  });

  res.sendStatus(201);
}

export async function getInitializations(req: Request, res: Response) {
  const userId = res.locals.user.userId;

  const initializations = await initializationService.getInitializations(
    userId
  );

  res.status(200).send(initializations);
}

export async function removeInitialization(req: Request, res: Response) {
  const id = Number(req.params.id);

  await initializationService.removeInitialization(id);

  res.sendStatus(200);
}
