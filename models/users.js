const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  followedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  followedProperties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Home",
    },
  ],

  budget: {
    type: String,
  },

  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "Location",
    },
  ],

  ethinicity: {
    type: String,
  },

  nationality: [
    {
      type: Schema.Types.ObjectId,
      ref: "Nationality",
    },
  ],

  gender: {
    type: String,
  },

  profilePic: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
