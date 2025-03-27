const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listening = new Schema({
  title: {
    type: String,
  },
  discription: String,
  image: String,
  price: Number,
  location: String,
  country: String,
});
