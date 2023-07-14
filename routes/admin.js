import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/admin.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("name is required"),
    body("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("invalid email type"),
    body("password").notEmpty().withMessage("password is required"),
    body("password_confirmation").notEmpty().withMessage("password_confirmation is required"),
  ],
  register
);
router.post(
  "/login",
  [
    body("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("invalid email type"),
    body("password").notEmpty().withMessage("password is required"),
  ],
  login
);

export default router;
