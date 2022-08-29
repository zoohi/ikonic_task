/** @format */

const mongoose = require("mongoose");

const Questions = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
  },
  answer: {
    type: String,
  },
});

const Todo = mongoose.model("question", Questions);

module.exports = Todo;
