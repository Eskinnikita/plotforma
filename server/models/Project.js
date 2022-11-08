const { Schema, model, default: mongoose } = require("mongoose");

const Project = new Schema({
  author_id: { type: mongoose.ObjectId, required: true, ref: "User" },
  title: { type: String, default: "Project" },
  cover: { type: String, default: "/" },
  published: { type: Date, default: new Date() },
});

module.exports = model("Project", Project);
