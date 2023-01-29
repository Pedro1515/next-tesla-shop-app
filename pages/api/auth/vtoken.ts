import { db } from "@/database";
import UserModel from "@/database/models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import { isValidToken } from "@/utils";

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

    let userId = "";

    try {
        userId = (await isValidToken(token))._id;
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }

    await db.connect();
    const user = await UserModel.findById(userId);
    await db.disconnect();

    if (!user) {
        return res.status(404).json({ message: "Email no found" });
    }

    return res.status(200).json({
        token,
        user,
    });
};
