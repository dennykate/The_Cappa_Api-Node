import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { returnErrorMessage } from "../utils/functions.js";
import Admin from "../models/admin.js";

dotenv.config();
const SECRET = process.env.SECRET;

export const checkAdmin = async (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    return returnErrorMessage(res, "token required");
  }

  const [type, token] = header.split(" ");

  if (type !== "Bearer") {
    return returnErrorMessage(res, "invalid token type");
  }

  jwt.verify(token, SECRET, async (err, data) => {
    if (err) {
      return returnErrorMessage(res, "token expired");
    }

    const isAdmin = await Admin.findOne({
      email: data.email,
      password: data.password,
    });

    if (!isAdmin) {
      return returnErrorMessage(res, "auth fail");
    } else {
      return next();
    }
  });
};
