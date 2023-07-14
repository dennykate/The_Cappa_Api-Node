import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  many,
  update,
} from "../controllers/facility.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("title").notEmpty().withMessage("title is requried"),
    body("icon").notEmpty().withMessage("image is requried"),
    body("description")
      .notEmpty()
      .withMessage("description account is requried"),
  ],
  create
);
router.post("/many", many);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
