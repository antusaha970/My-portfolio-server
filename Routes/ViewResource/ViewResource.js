const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/view_resume", (req, res) => {
  const resume = path.join(__dirname, "../../resources/resume.pdf");
  res.sendFile(resume, (error) => {
    if (error) {
      console.log(error);
    }
  });
});

module.exports = router;
