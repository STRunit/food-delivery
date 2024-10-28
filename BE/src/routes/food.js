import { Router } from "express";
import {
    createFood,
    deleteFood,
    getAllFoods,
    getFoodByID,
    getFoods,
    updateFood
} from "../controller/food.js";


const foodRouter = Router();

foodRouter.post("/create", createFood)
    .get("/", getFoods)
    .get("/all", getAllFoods)
    .get("/:id", getFoodByID)
    .put("/:id", updateFood)
    .delete("/:id", deleteFood);

export { foodRouter }