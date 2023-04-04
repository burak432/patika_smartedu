//express
const express = require("express");
const router = express.Router();

//mvc
// const pageController = require("../contollers/pageController");
// const courseController = require("../contollers/courseController");
// const CategoryController = require("../contollers/categoryController");
const authController = require("../contollers/authController");

//router
router.route("/signup").post(authController.createUser);

module.exports = router;
