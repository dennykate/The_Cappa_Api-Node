import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
});

const News = mongoose.model("news", NewsSchema);

export default News;
