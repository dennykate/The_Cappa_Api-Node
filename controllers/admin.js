import { validationResult } from "express-validator";
import crypto from "crypto";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import Admin from "../models/admin.js";
import { returnErrorMessage } from "../utils/functions.js";

dotenv.config();

const secret = process.env.SECRET;

export const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const { name, email, password, password_confirmation } = req.body;

  if (password != password_confirmation) {
    return returnErrorMessage(res, "passwords doesn't match");
  }

  const isEmailAlready = await Admin.findOne({ email });

  if (isEmailAlready) {
    return returnErrorMessage(res, "email already taken");
  }

  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  await Admin.create({
    name,
    email,
    password: hashedPassword,
  });

  const admin = { name, email };
  return res.status(201).json({
    success: true,
    message: "admin account has been created",
    data: admin,
  });
};

export const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return returnErrorMessage(res, "fail to login");
  }

  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  const admin = await Admin.findOne({ email, password: hashedPassword });

  if (!admin) {
    return returnErrorMessage(res, "fail to login");
  }

  jwt.sign(
    {
      name: admin.name,
      email: admin.email,
      password: admin.password,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    secret,
    (err, token) => {
      if (err) {
        return returnErrorMessage(res, "fail to login");
      }

      return res.status(200).json({
        success: true,
        message: "login successful",
        token,
        data: { name: admin.name, email: admin.email },
      });
    }
  );
};
