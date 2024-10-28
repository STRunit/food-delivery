import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    orderNumber: {
        type: String,
        required: [true, "Order number is required"]
    },
    foods: [],
    totalPrice: {
        type: Number,
        required: [true, "Total Price is required"]
    },
    process: {
        type: String,
        enum: ["Order confirmed", "Delivery started"],
        required: [true, "Process is required"]
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    district: {
        type: String,
        required: [true, "District is required"]
    },
    khoroo: {
        type: String,
        required: [true, "Khoroo is required"]
    },
    apartment: {
        type: String,
        required: [true, "Apartment is required"]
    },
    descriptionOfAddress: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone Number is required"]
    },
    paymentMethod: {
        type: String,
        required: [true, "Payment Method is required"],
        enum: [" By Cash", "By Online"],
        default: "By Online"
    },
})

export const orderModel = model("order", OrderSchema);