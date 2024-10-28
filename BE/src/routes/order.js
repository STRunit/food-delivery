import { Router } from "express";
import { createOrder, deleteOrder, getOrderByID, getOrders, updateOrder } from "../controller/order.js";




const orderRouter = Router();

orderRouter.post("/create", createOrder)
.get("/", getOrders)
.get("/:id", getOrderByID)
.put("/:id", updateOrder)
.delete("/:id", deleteOrder);

export { orderRouter }