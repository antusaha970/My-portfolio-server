const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

// App uses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adminLogin", (req, res) => {
  console.log(req.body);
  res.status(200).send(true);
});

console.log(`${process.env.TEST}`);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
