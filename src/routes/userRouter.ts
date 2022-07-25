import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { signUpSchema, loginSchema } from "../schemas/userSchema.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(signUpSchema),
  userController.signUp
);
userRouter.post(
  "/login",
  validateSchemaMiddleware(loginSchema),
  userController.login
);
userRouter.post("/logout", validateTokenMiddleware, userController.logout);

export default userRouter;
