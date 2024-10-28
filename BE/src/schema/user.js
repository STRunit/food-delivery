import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [12, "Please enter a valid email"],
        maxlength: [50, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    role: {
        required: false,
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

export const userModel = model("user", UserSchema);