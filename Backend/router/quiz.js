/** @format */

const express = require("express");
const router = express.Router();

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/");

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/");

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id");

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id");

module.exports = router;
