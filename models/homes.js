const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },

  room: {
    type: String,
  },

  year: {
    type: String,
  },

  price: {
    type: String,
    required: true,
  },

  bedrooms: {
    type: String,
    required: true,
  },

  bathrooms: {
    type: String,
    required: true,
  },

  pricePsf: {
    type: String,
  },

  propSqf: {
    type: String,
  },

  availability: {
    type: Boolean,
    required: true,
  },

  originalPoster: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  boards: {
    type: Array,
    required: true,
  },

  images: {
    type: [],
  },
});

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;
