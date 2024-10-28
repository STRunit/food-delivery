import { Schema, model } from "mongoose";

const FoodSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    ingredients: {
        type: String,
        required: [true, "Ingredient is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    discount: {
        type: Number,
        required: false,
    },
    categoryId: {
        type: Schema.ObjectId,
        ref: "category",
        required: [true, "Category id required"]
    }
})

export const foodModel = model("food", FoodSchema);