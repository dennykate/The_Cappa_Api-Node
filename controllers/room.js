import { validationResult } from "express-validator";
import Room from "../models/room.js";
import { isExistInDatabase, returnErrorMessage } from "../utils/functions.js";

export const many = async (req, res) => {
  try {
    const { data } = req.body;
    await Room.create(data);

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

  const newRoom = await Room.create(req.body);

  return res.status(201).json({ success: true, data: newRoom });
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = options.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const allRooms = await Room.find();
  const rooms = await Room.find(filter)
    .sort({ _id: -1 })
    .skip(skip)
    .limit(limit);

  return res.status(200).json({
    success: true,
    meta: {
      filter,
      page,
      limit,
      skip,
      total: allRooms.length,
    },
    data: rooms,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Room);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const room = await Room.findById(id);

    return res.status(200).json({ success: true, data: room });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Room);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Room.findByIdAndUpdate(id, req.body);

    return res
      .status(200)
      .json({ success: true, message: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Room);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Room.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
