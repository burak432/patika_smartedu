//express
const express = require("express");
const app = express();

//////////////////////routes//////////////////////
app.get("/", (req, res) => {
  res.send("hello me");
});

//server listener
const port = 3000;
app.listen(port, () => console.log(`server is up and running on port ${port}`));
