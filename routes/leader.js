import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  many,
  update,
} from "../controllers/leader.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("name").notEmpty().withMessage("Name is requried"),
    body("image").notEmpty().withMessage("Image is requried"),
    body("department").notEmpty().withMessage("Department is requried"),
    body("email").notEmpty().withMessage("Email account is requried"),
    body("instagram").notEmpty().withMessage("Instagram account is requried"),
    body("twitter").notEmpty().withMessage("Twitter account is requried"),
    body("facebook").notEmpty().withMessage("Facebook account is requried"),
    body("pinterest").notEmpty().withMessage("Pinterest account is requried"),
  ],
  create
);
router.post("/many", many);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
