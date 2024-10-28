import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import { Connect } from "./utils/db.js";
import { userRouter } from "./routes/user.js";
import { authRouter } from "./routes/auth.js";
import { categoryRouter } from "./routes/category.js";
import { foodRouter } from "./routes/food.js";
import { orderRouter } from "./routes/order.js";
import { recoveryRouter } from "./routes/recovery.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/recovery", recoveryRouter);

app.listen(PORT, () => {
    Connect(process.env.MONGODB_URL)
    console.log("Backend listening on port", PORT)
})