import { Router } from "express";
import * as initializationController from "../controllers/initializationController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const initializeRouter = Router();

initializeRouter.post(
  "/initialization",
  validateTokenMiddleware,
  initializationController.createInitialization
);
initializeRouter.get(
  "/initializations",
  validateTokenMiddleware,
  initializationController.getInitializations
);
initializeRouter.delete(
  "/remove/:id",
  validateTokenMiddleware,
  initializationController.removeInitialization
);

export default initializeRouter;
