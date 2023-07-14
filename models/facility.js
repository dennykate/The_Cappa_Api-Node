import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema({
  title: String,
  icon: String,
  description: String,
});

const Facility = mongoose.model("facility", FacilitySchema);

export default Facility;
