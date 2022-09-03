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
    requried: true,
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
      ref: "Property",
    },
  ],

  budget: {
    type: String,
  },

  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "location",
    },
  ],

  ethinicity: {
    type: String,
  },

  nationality: {
    type: Schema.Types.ObjectId,
    ref: "nationality",
  },

  gender: {
    type: String,
  },

  profilePic: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
