import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  many,
  update,
} from "../controllers/review.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("customer").notEmpty().withMessage("customer is requried"),
    body("image").notEmpty().withMessage("image is requried"),
    body("order_id").notEmpty().withMessage("order_id is requried"),
    body("date").notEmpty().withMessage("date is requried"),
    body("comment").notEmpty().withMessage("comment  is requried"),
  ],
  create
);
router.post("/many", many);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
