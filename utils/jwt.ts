import { JWTPayload } from "@/interfaces/jwtPayload";
import jwt from "jsonwebtoken";

export const signToken = (payload: JWTPayload) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    return token;
};

export const isValidToken = (token: string): Promise<JWTPayload> => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET || "", (error, payload) => {
            if (error) {
                return reject(error);
            }

            resolve(payload as JWTPayload);
        });
    });
};
