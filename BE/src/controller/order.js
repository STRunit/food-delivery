import { orderModel } from "../schema/order.js";

export const createOrder = async (req, res) => {
    const { orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, paymentMethod } = req.body;

    try {
        const response = await orderModel.create({ orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, paymentMethod });
        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export const getOrders = async (req, res) => {

    try {
        const response = await orderModel.find();
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getOrderByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await orderModel.findById(id);
        res.send(response);
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const updatedValues = req.body

    try {
        const response = await orderModel.findByIdAndUpdate(id, updatedValues, { new: true })
        res.send(response)
      
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await orderModel.findByIdAndDelete(id)
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}