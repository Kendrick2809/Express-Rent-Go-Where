const mongoose = require("mongoose");
// const { Schema } = mongoose;

const nationalitySchema = new mongoose.Schema({
  nationality: {
    type: String,
    required: true,
    unique: true,
  },

  // nationality: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   enum: ["", ]
  // },
});
const Nationality = mongoose.model("Nationality", nationalitySchema);
module.exports = Nationality;
