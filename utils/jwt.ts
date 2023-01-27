import jwt from "jsonwebtoken";

export const signToken = (payload: { _id: string; email: string }) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    return token;
};
