//express
const express = require("express");
const router = express.Router();

//mvc
const pageController = require("../contollers/pageController");
const courseController = require("../contollers/courseController");

//router
router.route("/").get(courseController.getAllCourses);
router.route("/").post(courseController.createCourse);

module.exports = router;
