const Course = require("../models/Course");

exports.createCourse = (req, res) => {
  try {
    const course = Course.create(req.body);
    res.status(201).json({
      status: "success",
      course,
    });
  } catch {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
