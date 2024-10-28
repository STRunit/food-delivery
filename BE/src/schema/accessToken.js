import { Schema, model } from "mongoose";

const AccessTokenSchema = new Schema({
    email: {
        type: String,
        required: [true, "Name is required"]
    },
    accessToken: {
        type: String,
        required: [true, "Access Token is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "5m"
    }
})

export const accessTokenModel = model("accessTokens", AccessTokenSchema);