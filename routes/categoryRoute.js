//express
const express = require("express");
const router = express.Router();

//mvc
// const pageController = require("../contollers/pageController");
// const courseController = require("../contollers/courseController");
const CategoryController = require("../contollers/categoryController");

//router
router.route("/").post(CategoryController.createCategory);

module.exports = router;
