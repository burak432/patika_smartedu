const Course = require("../models/Course");
const Category = require("../models/Category");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({
      status: "success",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });
    let filter = {};

    if (categorySlug) {
      filter = {
        category: category._id,
      };
    }

    const courses = await Course.find(filter);
    const categories = await Category.find();

    res.status(200).render("courses.ejs", {
      status: "success",
      pageName: "courses",
      courses,
      categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    res.status(200).render("course.ejs", {
      status: "success",
      pageName: "courses",
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
