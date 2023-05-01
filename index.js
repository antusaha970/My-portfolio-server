// Require Modules
const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// App uses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

// connect to database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.cfh8khq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

// Admin Route
app.use("/", require(path.join(__dirname, "./Routes/Admin/Admin")));
//Project Route
app.use("/", require(path.join(__dirname, "./Routes/Project/Project")));

// Root call
app.get("/", (req, res) => {
  res.send("Portfolio API is Working perfectly");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
