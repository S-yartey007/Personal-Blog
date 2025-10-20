// routes/auth.js
import express from "express";
const authRouter = express.Router();
import { postLogin, logout, getLogin } from "../controllers/authController.js";

authRouter.get("/login", getLogin);
authRouter.post("/login", postLogin);
authRouter.get("/logout", logout);

export { authRouter };
