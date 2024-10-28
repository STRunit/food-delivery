import { Schema, model } from "mongoose";

const OTPSchema = new Schema({
    email: {
        type: String,
        required: [true, "Name is required"]
    },
    oneTimePass: {
        type: String,
        required: [true, "One Time Password is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "5m"
    }
})

export const otpModel = model("otps", OTPSchema);