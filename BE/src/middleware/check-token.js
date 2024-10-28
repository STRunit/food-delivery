import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {

    if (req.headers.cookie) {
        const token = req.headers.cookie.split("=")[1];
        const isToken = jwt.verify(token, process.env.PRIVATE_KEY);
        
        req.body = isToken
        
        next();
        return
    }

    return res.status(403).send({ error: "Invalid token" });
}