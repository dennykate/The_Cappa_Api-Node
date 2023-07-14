import { validationResult } from "express-validator";
import Service from "../models/service.js";
import { isExistInDatabase, returnErrorMessage } from "../utils/functions.js";

export const many = async (req, res) => {
  try {
    const { data } = req.body;
    await Service.create(data);

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

  const newService = await Service.create(req.body);

  return res.status(201).json({ success: true, data: newService });
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = options.page || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const totalServices = await Service.find();
  const services = await Service.find(filter)
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
      total: totalServices.length,
    },
    data: services,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Service);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const service = await Service.findById(id);

    return res.status(200).json({ success: true, data: service });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Service);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Service.findByIdAndUpdate(id, req.body);

    return res.status(200).json({ success: true, data: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Service);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Service.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
