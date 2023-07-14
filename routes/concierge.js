import express from "express";
import {
  create,
  destroy,
  get,
  getAll,
  update,
} from "../controllers/concierge.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("image").notEmpty().withMessage("image is required"),
    body("name").notEmpty().withMessage("name is required"),
    body("id").notEmpty().withMessage("id is required"),
    body("join_date").notEmpty().withMessage("join_date is required"),
    body("job_description")
      .notEmpty()
      .withMessage("job_description is required"),
    body("schedule").notEmpty().withMessage("schedule is required"),
    body("contact").notEmpty().withMessage("contact is required"),
    body("status").notEmpty().withMessage("status is required"),
  ],
  create
);
router.get("/all", getAll);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
