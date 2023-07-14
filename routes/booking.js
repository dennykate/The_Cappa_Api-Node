import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  update,
} from "../controllers/booking.js";
import { body, param } from "express-validator";
import { checkAdmin } from "../middlewares/admin.js";

const router = express.Router();

router.post(
  "/create",
  [
    body("name").notEmpty().withMessage("name is requried"),
    body("guests").notEmpty().withMessage("guests field is requried").isInt(),
    body("mobile").notEmpty().withMessage("mobile-phone is requried"),
    body("email")
      .notEmpty()
      .withMessage("Email is requried")
      .isEmail()
      .withMessage("invalid email"),
    body("check_in_check_out")
      .notEmpty()
      .withMessage("check_in_check_out is requried"),
    body("room_type").notEmpty().withMessage("room_type is requried"),
  ],
  create
);
router.get("/all", getAll);
router.get(
  "/:id",
  [param("id").notEmpty().withMessage("parameter (id) is required")],
  get
);
router.put(
  "/update/:id",
  [param("id").notEmpty().withMessage("parameter (id) is required")],
  update
);
router.delete(
  "/delete/:id",
  [param("id").notEmpty().withMessage("parameter (id) is required")],
  destroy
);

export default router;
