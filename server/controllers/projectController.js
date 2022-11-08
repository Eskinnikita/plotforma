const Project = require("../models/Project");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

class projectController {
  async createProject(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
      const { title, author_id } = req.body;
      const project = new Project({ title, author_id });
      await project.save();
      return res.json({ message: "Проект успешно создан" });
    } catch (e) {
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  async getUserProjects(req, res) {
    try {
      var userId = req.params.userId;
      const projects = await Project.find({ where: { author_id: userId } });
      return res.json(projects);
    } catch (e) {
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new projectController();
