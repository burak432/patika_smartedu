//express
const express = require("express");
const app = express();
const path = require("path");

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

//route
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");

//////////////////////routes//////////////////////
app.use("/", pageRoute);
app.use("/courses", courseRoute);

//server listener
const port = 3000;
app.listen(port, () => console.log(`server is up and running on port ${port}`));
