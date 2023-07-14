import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  image: String,
  customer: String,
  order_id: String,
  date: String,
  comment: String,
});

const Review = mongoose.model("review", ReviewSchema);

export default Review;
