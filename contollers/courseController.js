exports.createCourse = (req, res) => {
  try {
    const course = Course.create(req.body);
    res.status(201).json({
      status: "success",
      course,
    });
  } catch {
    status: "failed", error;
  }
};
