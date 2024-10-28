import { Router } from "express";
import { Login, SignUp } from "../controller/auth.js";


const authRouter = Router();

authRouter.post("/login", Login)
.post("/sign-up", SignUp);

export {authRouter}