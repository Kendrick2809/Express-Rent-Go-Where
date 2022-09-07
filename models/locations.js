const mongoose = require("mongoose");
const { Schema } = mongoose;

const locationSchema = new mongoose.Schema({
  areaName: {
    type: String,
    required: true,
    unique: true,
  },

  region: {
    type: String,
    required: true
  },

  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Home",
    },
  ],
});
const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
