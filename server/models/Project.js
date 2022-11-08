const { Schema, model } = require("mongoose");

const Project = new Schema({
  title: { type: String, default: "Project" },
  cover: { type: String, default: "/" },
  published: { type: Date, default: new Date() },
});

module.exports = model("Project", Project);
