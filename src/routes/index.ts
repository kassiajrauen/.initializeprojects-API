import { Router } from "express";
import userRouter from "./userRouter.js";
import initializationRouter from "./initializationRouter.js";

const router = Router();
router.use(userRouter);
router.use(initializationRouter);

export default router;
