import { foodModel } from "../schema/food.js"

export const createFood = async (req, res) => {
    const { name, image, ingredients, price, discount, categoryId } = req.body;

    try {
        const response = await (await foodModel.create({ name, image, ingredients, price, discount, categoryId }))
        res.status(200).json(response)

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getAllFoods = async (req, res) => {

    try {
        const response = await foodModel.find().populate("categoryId")
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getFoods = async (req, res) => {

    try {
        const { categoryId } = req.query;

        const response = await foodModel.find({ categoryId }).populate("categoryId")
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const getFoodByID = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await foodModel.findById(id).populate("categoryId")
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const updateFood = async (req, res) => {
    const { id } = req.params;
    const updatedValues = req.body

    try {
        const response = await foodModel.findByIdAndUpdate(id, updatedValues, { new: true })
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}

export const deleteFood = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await foodModel.findByIdAndDelete(id)
        res.send(response);

    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
}