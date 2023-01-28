import { db } from "@/database";
import UserModel from "@/database/models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { signToken } from "@/utils";

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
            return checkJWT(req, res);

        default:
            return res.status(405).json({ message: "Method not allowed" });
    }
}
export const checkJWT = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const { token = "" } = req.cookies;

    await db.connect();
    // const user = await UserModel.findOne({ email });
    await db.disconnect();

    // if (!user) {
    //     return res.status(404).json({ message: "Email no found" });
    // }

    // if (!bcrypt.compareSync(password, user.password!)) {
    //     return res.status(401).json({ message: "Invalid password" });
    // }

    // const { role, name, _id } = user;

    // const token = signToken({ _id, email });

    // return res.status(200).json({
    //     token,
    //     user: { email, name, role },
    // });
};
