import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(errorHandlerMiddleware);

export default app;
