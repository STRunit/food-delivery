import { Router } from "express";
import { passwordReset, sendMail, verifyOTP } from "../controller/recovery.js";

const recoveryRouter = Router();

recoveryRouter.post("/send-mail", sendMail)
    .post("/verify-otp", verifyOTP)
    .put("/password-reset", passwordReset);
export { recoveryRouter }