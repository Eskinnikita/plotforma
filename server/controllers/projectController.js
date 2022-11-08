const Project = require("../models/Project");
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
      const { title } = req.body;
      const project = new Project({ title });
      await project.save();
      return res.json({ message: "Проект успешно создан" });
    } catch (e) {
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }
}

module.exports = new projectController();
