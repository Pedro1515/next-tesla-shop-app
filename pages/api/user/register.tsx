import { db } from "@/database";
import UserModel from "@/database/models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { signToken, validations } from "@/utils";

type Data =
    | { message: string }
    | {
          token: string;
          user: {
              email: string;
              name: string;
              role: string;
          };
      };

export default function handle(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "POST":
            return registerUser(req, res);

        default:
            return res.status(405).json({ message: "Method not allowed" });
    }
}
export const registerUser = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const {
        email = "",
        password = "",
        name = "",
    } = req.body as {
        email: string;
        password: string;
        name: string;
    };

    await db.connect();
    const user = await UserModel.findOne({ email });

    if (user) {
        await db.disconnect();
        return res.status(404).json({ message: "Email is already registered" });
    }

    if (password.length < 6) {
        return res
            .status(401)
            .json({ message: "Password must be at least 6 characters long" });
    }

    if (name.length < 3) {
        return res
            .status(401)
            .json({ message: "Name must be at least 3 characters long" });
    }

    if (!validations.isValidEmail(email)) {
        return res.status(401).json({ message: "Email is not valid" });
    }

    const newUser = new UserModel({
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password),
        name,
        role: "client",
    });

    try {
        newUser.save();
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(500).json({ message: "Error registering user" });
    }

    const { role, _id } = newUser;

    const token = signToken({ _id, email });

    return res.status(200).json({
        token,
        user: { email, name, role },
    });
};
