exports.getIndexPage = (req, res) => {
  res.status(200).render("index.ejs", {
    pageName: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about.ejs", {
    pageName: "about",
  });
};
