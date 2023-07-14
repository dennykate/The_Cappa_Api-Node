import mongoose from "mongoose";

const LeaderScheme = new mongoose.Schema({
  name: String,
  image: String,
  department: String,
  email: String,
  instagram: String,
  twitter: String,
  facebook: String,
  pinterest: String,
});

const Leader = mongoose.model("leader", LeaderScheme);

export default Leader;
