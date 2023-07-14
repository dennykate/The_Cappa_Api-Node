import { validationResult } from "express-validator";
import Review from "../models/review.js";
import { isExistInDatabase, returnErrorMessage } from "../utils/functions.js";

export const many = async (req, res) => {
  try {
    const { data } = req.body;
    await Review.create(data);

    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const newReview = await Review.create(req.body);

  return res.status(201).json({ success: true, data: newReview });
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = options.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const totalReviews = await Review.find();
  const reviews = await Review.find(filter)
    .limit(limit)
    .skip(skip)
    .sort({ _id: -1 });

  return res.status(200).json({
    success: true,
    meta: {
      filter,
      page,
      limit,
      skip,
      total: totalReviews.length,
    },
    data: reviews,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Review);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const review = await Review.findById(id);

    return res.status(200).json({ success: true, data: review });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Review);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Review.findByIdAndUpdate(id, req.body);

    return res.status(200).json({ success: true, data: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Review);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Review.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
