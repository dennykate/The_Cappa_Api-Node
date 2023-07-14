import express from "express";
import { create, destroy, get, getAll, update } from "../controllers/guest.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("image").notEmpty().withMessage("image is required"),
    body("name").notEmpty().withMessage("name is required"),
    body("code").notEmpty().withMessage("code is required"),
    body("order_date").notEmpty().withMessage("order_date is required"),
    body("check_in").notEmpty().withMessage("check_in is required"),
    body("check_out").notEmpty().withMessage("check_out is required"),
    body("special_request")
      .notEmpty()
      .withMessage("special_request is required"),
    body("room_type").notEmpty().withMessage("room_type is required"),
    body("status").notEmpty().withMessage("status is required"),
  ],
  create
);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
