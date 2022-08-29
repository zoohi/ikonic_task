/** @format */

// controllers/Question.js
const Question = require("../models/question");

exports.getAllQuestion = (req, res) => {
  Question.find()
    .then((Question) => res.json(Question))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Question not found", error: err.message })
    );
};

exports.postCreateQuestion = (req, res) => {
  const { question, options, answer } = req.body;

  Question.create({ question, options: [...options], answer })
    .then((data) => res.json({ message: "Question added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add Question", error: err.message })
    );
};

exports.putUpdateQuestion = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update Question", error: err.message })
    );
};

exports.deleteQuestion = (req, res) => {
  Question.findByIdAndRemove(req.params.id, req.body)
    .then((data) =>
      res.json({ message: "Question deleted successfully", data })
    )
    .catch((err) =>
      res.status(404).json({ message: "book not found", error: err.message })
    );
};
