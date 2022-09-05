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
    ref: "Comment",
  },

  replies: {
    type: Schema.Types.ObjectId,
    ref: "Reply",
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
