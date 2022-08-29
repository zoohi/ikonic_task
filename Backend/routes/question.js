/** @format */

// routes/todo.js
const express = require("express");
const router = express.Router();

const {
  getAllQuestion,
  postCreateQuestion,
  putUpdateQuestion,
  deleteQuestion,
} = require("../controllers/question");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllQuestion);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateQuestion);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateQuestion);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteQuestion);

module.exports = router;
