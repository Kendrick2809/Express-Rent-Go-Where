const mongoose = require("mongoose");
const { Schema } = mongoose;

const boardSchema = new mongoose.Schema({
  originalPoster: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  Properties: [
    {
      type: Schema.Types.ObjectId,
      ref: Property,
    },
  ],

  descriptions: {
    type: String,
  },

  comments: {
    type: Schema.Types.ObjectId,
    ref: "comment",
  },

  replies: {
    type: Schema.Types.ObjectId,
    ref: "reply",
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
