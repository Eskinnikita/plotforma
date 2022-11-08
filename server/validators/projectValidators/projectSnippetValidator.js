const { body } = require("express-validator");

const projectSnippetValidator = [
  body("title").notEmpty().withMessage("Поле не может быть пустым"),
];

module.exports = projectSnippetValidator;
