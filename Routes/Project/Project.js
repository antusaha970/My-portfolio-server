const express = require("express");
const router = express.Router();
const ProjectCollection = require("../../Schemas/ProjectSchema/ProjectSchema");

router.put("/add/project", async (req, res) => {
  const projectDetail = req.body;
  try {
    const newProject = await ProjectCollection(projectDetail);
    await newProject.save();
    res.status(200).send(true);
  } catch (error) {
    console.log(error);
    res.status(500).send(false);
  }
});

module.exports = router;
