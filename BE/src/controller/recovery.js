import nodemailer from "nodemailer";
import { userModel } from "../schema/user.js"
import { otpModel } from "../schema/otp.js"
import { accessTokenModel } from "../schema/accessToken.js"
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "st21aye@gmail.com",
        pass: "rqpx kpje xnqo qnbe",
    },
});

export const sendMail = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) return res.status(404).json("User not found");

        const generatedOTP = Math.floor(Math.random() * 9000 + 1000);

        await otpModel.create({
            email,
            oneTimePass: generatedOTP
        });

        const mailOptions = {
            from: '"Food Delivery Project" <st21aye@gmail.com>',
            to: email,
            subject: "Password Reset OTP",
            text: `Your One Time Password is: ${generatedOTP}. This Password will expire in 5 minutes.`
        }

        const Info = await transporter.sendMail(mailOptions);

        if (Info.messageId) {
            return res.status(200).send({ success: true, message: "OTP sent successfully.", email: user.email });
        } else {
            return res.status(500).send({ success: false, error: "Message didn't send." });
        }
    } catch (error) {
        console.error('Error sending mail:', error);
        return res.status(500).send({ success: false, error: 'Internal server error.' });
    }
}

export const verifyOTP = async (req, res) => {
    const { email, oneTimePass } = req.body;

    try {
        const response = await otpModel.findOne({ email });

        if (!response) return res.status(410).json("OTP expired or not found");

        if (response.oneTimePass === oneTimePass) {
            const token = await accessTokenModel.create({ email, accessToken: nanoid() });
            return res.status(200).
                send({
                    success: true,
                    email: token.email,
                    accessTokens: token.accessToken,
                    message: "OTP verified successfully."
                });
        }

    } catch (error) {
        console.error('Error verifying OTP:', error);
        return res.status(500).json({
            error: "An internal server error occurred."
        });
    }
}

const saltRounds = 10;

export const passwordReset = async (req, res) => {
    const { email, accessToken, password } = req.body;

    try {
        const response = await accessTokenModel.findOneAndDelete({ email });

        if (!response) return res.status(410).json("Access Token expired or not found");

        if (response.accessToken == accessToken) {

            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);

            await userModel.updateOne({ email }, { password: hash })

            res.status(200).send({ success: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}