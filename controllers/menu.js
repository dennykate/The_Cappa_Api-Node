import { validationResult } from "express-validator";
import Menu from "../models/menu.js";
import { isExistInDatabase, returnErrorMessage } from "../utils/functions.js";

export const many = async (req, res) => {
  try {
    const { data } = req.body;
    await Menu.create(data);

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

  const newMenu = await Menu.create(req.body);

  return res.status(201).json({ success: true, data: newMenu });
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = options.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const totalMenus = await Menu.find();
  const menus = await Menu.find(filter)
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
      total: totalMenus.length,
    },
    data: menus,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Menu);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const menu = await Menu.findById(id);

    return res.status(200).json({ success: true, data: menu });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Menu);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Menu.findByIdAndUpdate(id, req.body);

    return res.status(200).json({ success: true, data: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Menu);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Menu.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
