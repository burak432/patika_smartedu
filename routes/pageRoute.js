//express
const express = require("express");
const router = express.Router();

//mvc
const pageController = require("../contollers/pageController");
const courseController = require("../contollers/courseController");

// router.get("/", pageController.getIndexPage)
// router.get("/about", pageController.getAboutPage)

//router
router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);

module.exports = router;
