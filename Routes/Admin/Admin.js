const express = require("express");
const router = express.Router();

router.post("/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (
    email === `${process.env.ADMIN_EMAIL}` &&
    password === `${process.env.ADMIN_PASSWORD}`
  ) {
    res.status(200).send(true);
  } else {
    res.status(401).send(false);
  }
});

module.exports = router;
