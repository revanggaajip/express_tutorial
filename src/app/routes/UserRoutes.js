import express from "express";
import { getAllUsers } from "../controllers/UserController.js";
// Initial router
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/show", getAllUsers);

export { userRouter };
