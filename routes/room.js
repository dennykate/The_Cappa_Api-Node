import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  many,
  update,
} from "../controllers/room.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("image").notEmpty().withMessage("Image is required"),
    body("room_name").notEmpty().withMessage("room_name is required"),
    body("bed_type").notEmpty().withMessage("bed_type is required"),
    body("room_type").notEmpty().withMessage("room_type is required"),
    body("room_floor").notEmpty().withMessage("room_floor is required"),
    body("facilities").notEmpty().withMessage("Facilities is required"),
    body("rate").notEmpty().withMessage("rate is required"),
    body("status").notEmpty().withMessage("Image is required"),
  ],
  create
);
router.post("/many", many);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
