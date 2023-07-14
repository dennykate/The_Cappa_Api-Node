import { validationResult } from "express-validator";
import Booking from "../models/booking.js";
import { isExistInDatabase, returnErrorMessage } from "../utils/functions.js";

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const { name, guests, mobile, email, check_in_check_out, room_type } =
    req.body;

  const newBooking = await Booking.create({
    name,
    guests,
    mobile,
    email,
    check_in_check_out,
    room_type,
    note: req.body.note || "",
  });

  return res.status(201).json({ success: true, data: newBooking });
};

export const getAll = async (req, res) => {
  const options = req.query;

  const filter = options.filter || {};
  const page = parseInt(options.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const allBookings = await Booking.find();
  const bookings = await Booking.find(filter)
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
      total: allBookings.length,
    },
    data: bookings,
  });
};

export const get = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Booking);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    const booking = await Booking.findById(id);

    return res.status(200).json({ success: true, data: booking });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Booking);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Booking.findByIdAndUpdate(id, req.body);

    return res
      .status(200)
      .json({ success: true, message: "update successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};

export const destroy = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return returnErrorMessage(res, errors.array());
  }

  const id = req.params.id;

  try {
    const isExist = await isExistInDatabase(id, Booking);

    if (isExist === null) {
      return returnErrorMessage(res, "invalid id");
    }

    await Booking.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "delete successful" });
  } catch (error) {
    return returnErrorMessage(res, "invalid id");
  }
};
