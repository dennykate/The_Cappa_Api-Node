import { validationResult } from "express-validator";
import Guest from "../models/guest.js";
import {
  returnSuccessMessage,
  returnErrorMessage,
  isExistInDatabase,
} from "../utils/functions.js";

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  try {
    const newGuest = await Guest.create(req.body);

    return returnSuccessMessage(res, { data: newGuest }, 201);
  } catch (error) {
    return returnErrorMessage(res, "unknown error");
  }
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = options.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const totalGuests = await Guest.find();
  const guests = await Guest.find(filter)
    .sort({ _id: -1 })
    .limit(limit)
    .skip(skip);

  return returnSuccessMessage(res, {
    meta: {
      filter,
      page,
      limit,
      skip,
      total: totalGuests.length,
    },
    data: guests,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Guest);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const guest = await Guest.findById(id);

    return returnSuccessMessage(res, { data: guest });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Guest);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const updatedGuest = await Guest.findByIdAndUpdate(id, req.body);

    return returnSuccessMessage(res, { message: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Guest);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Guest.findByIdAndRemove(id);

    return returnSuccessMessage(res, { message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
