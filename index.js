// Require Modules
const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// App uses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

// Admin Route
app.use("/", require(path.join(__dirname, "./Routes/Admin/Admin")));

// Root call
app.get("/", (req, res) => {
  res.send("Portfolio API is Working perfectly");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
