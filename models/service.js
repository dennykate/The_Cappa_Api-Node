import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String,
  description: String,
});

const Service = mongoose.model("service", ServiceSchema);

export default Service;
