//express
const express = require("express");
const app = express();
const path = require("path");

//static files
app.use(express.static(path.join(__dirname, "public")));

//template engine - ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//////////////////////routes//////////////////////
app.get("/", (req, res) => {
  res.status(200).render("index.ejs", {
    pageName: "index",
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about.ejs", {
    pageName: "about",
  });
});

//server listener
const port = 3000;
app.listen(port, () => console.log(`server is up and running on port ${port}`));
