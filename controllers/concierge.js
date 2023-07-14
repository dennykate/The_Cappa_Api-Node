import { validationResult } from "express-validator";
import Concierge from "../models/concierge.js";
import {
  isExistInDatabase,
  returnErrorMessage,
  returnSuccessMessage,
} from "../utils/functions.js";

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const newConcierge = await Concierge.create(req.body);

  return returnSuccessMessage(res, { data: newConcierge }, 201);
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = parseInt(options.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const totalConcierges = await Concierge.find();
  const concierges = await Concierge.find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);

  return returnSuccessMessage(res, {
    meta: {
      filter,
      page,
      limit,
      skip,
      total: totalConcierges.length,
    },
    data: concierges,
  });
};

export const get = async (req, res) => {
  const { id } = req.params;

  try {
    const isExist = await isExistInDatabase(id, Concierge);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const concierge = await Concierge.findById(id);

    return returnSuccessMessage(res, { data: concierge });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const { id } = req.params;

  try {
    const isExist = await isExistInDatabase(id, Concierge);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Concierge.findByIdAndUpdate(id, req.body);

    return returnSuccessMessage(res, { message: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const isExist = await isExistInDatabase(id, Concierge);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Concierge.findByIdAndRemove(id, req.body);

    return returnSuccessMessage(res, { message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
