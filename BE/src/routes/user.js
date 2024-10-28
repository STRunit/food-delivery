import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { checkToken } from "../middleware/check-token.js";
import { checkRole } from "../middleware/check-role.js";

const userRouter = Router();

userRouter.post("/create", createUser)
    .get("/:id", getUser)
    .get("/", checkToken, checkRole, getUsers)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);
export { userRouter }