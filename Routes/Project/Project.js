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

router.get("/resources/projects", async (req, res) => {
  try {
    const projectData = await ProjectCollection.find();
    res.status(200).send(projectData);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.delete("/resources/delete", async (req, res) => {
  const id = req.query.id;
  try {
    const result = await ProjectCollection.deleteOne({ _id: id });
    if (result.acknowledged) {
      res.status(200).send(true);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
