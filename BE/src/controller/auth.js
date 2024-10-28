import bcrypt from "bcrypt";
import { userModel } from "../schema/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const Login = async (req, res) => {
    const { email, password } = req.body;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).send({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(403).send({ message: "Username or password incorrect" });

        const token = jwt.sign({ user }, PRIVATE_KEY);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60
        }).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

const saltRounds = 10;

export const SignUp = async (req, res) => {
    const { email, name, password, phoneNumber, role } = req.body;
    
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const user = await userModel.create({ email, name, password: hash, phoneNumber, role });

        res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}