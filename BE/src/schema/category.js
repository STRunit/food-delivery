import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    foodId: {
        type: Schema.ObjectId,
        ref: "food",
    }
})

export const categoryModel = model("category", CategorySchema);