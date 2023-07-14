import mongoose from "mongoose";

const ConciergeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  join_date: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Concierge = mongoose.model("concierge", ConciergeSchema);

export default Concierge;
