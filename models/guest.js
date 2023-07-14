import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  order_date: {
    type: String,
    required: true,
  },
  check_in: {
    type: String,
    required: true,
  },
  check_out: {
    type: String,
    required: true,
  },
  special_request: {
    type: String,
    required: true,
  },
  room_type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Guest = mongoose.model("guest", GuestSchema);

export default Guest;
