//express
const express = require("express");
const app = express();
const path = require("path");

//express url json parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/smartedu-db");
mongoose.connection.once("open", () => {
  console.log("mongoose connected");
});

//static files
app.use(express.static(path.join(__dirname, "public")));

//template engine - ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//mvc
const pageController = require("./contollers/pageController");
const courseController = require("./contollers/courseController");
const categoryController = require("./contollers/categoryController");

//route
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");

//////////////////////routes//////////////////////
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);

//server listener
const port = 3000;
app.listen(port, () => console.log(`server is up and running on port ${port}`));
