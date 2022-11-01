const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");

router.post("/registration", controller.registation);
router.post("/login", controller.login);
router.get("/users", controller.getUser);

module.exports = router;
