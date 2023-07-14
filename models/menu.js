import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Menu = mongoose.model("menu", MenuSchema);

export default Menu;
