const Router = require("express");
const router = new Router();
const controller = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const validateRequest = require("../middlewares/validateRequest");

const projectSnippetValidator = require("../validators/projectValidators/projectSnippetValidator");

//User registration
router.post(
  "/create",
  projectSnippetValidator,
  validateRequest,
  authMiddleware,
  controller.createProject
);

router.get("/:userId", authMiddleware, controller.getUserProjects);

module.exports = router;
