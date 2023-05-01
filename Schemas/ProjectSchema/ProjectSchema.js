const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: String,
  liveLink: String,
  githubLink: String,
});

const ProjectCollection = mongoose.model("projectCollection", projectSchema);
module.exports = ProjectCollection;
