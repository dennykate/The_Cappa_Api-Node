import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  many,
  update,
} from "../controllers/menu.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("name").notEmpty().withMessage("name is requried"),
    body("price").notEmpty().withMessage("price is requried"),
    body("category").notEmpty().withMessage("category is requried"),
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
