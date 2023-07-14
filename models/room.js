import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  image: String,
  room_name: String,
  bed_type: String,
  room_type: String,
  room_floor: String,
  facilities: String,
  rate: String,
  status: String,
});

const Room = mongoose.model("room", RoomSchema);

export default Room;
