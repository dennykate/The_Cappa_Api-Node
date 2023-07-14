import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  guests: {
    type: Number,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  check_in_check_out: {
    type: String,
  },
  room_type: {
    type: String,
  },
  note: {
    type: String,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
