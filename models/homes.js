const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },

  rooms: {
    type: String,
  },

  year: {
    type: String,
  },

  price: {
    type: String,
  },

  bathrooms: {
    type: String,
  },

  pricePsf: {
    type: String,
  },

  propSqf: {
    type: String,
  },

  availability: {
    type: Boolean,
  },

  originalPoster: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  boards: {
    type: Array,
  },

  images: {
    type: [],
  },
});

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;
