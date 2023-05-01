const express = require("express");
const router = express.Router();

router.put("/add/project", (req, res) => {
  console.log(req.body);
  res.status(200).send(true);
});

module.exports = router;
