const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

// exports.getAllCategories = async (req, res) => {
//   try {
//     const category = await Category.find();
//     res.status(200).render("courses.ejs", {
//       status: "success",
//       pageName: "courses",
//       courses,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "failed",
//       error,
//     });
//   }
// };

// exports.getCourse = async (req, res) => {
//   try {
//     const course = await Course.findOne({ slug: req.params.slug });
//     res.status(200).render("course.ejs", {
//       status: "success",
//       pageName: "courses",
//       course,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "failed",
//       error,
//     });
//   }
// };
