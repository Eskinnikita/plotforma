const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");

class authController {
  async registation(req, res) {
    try {
      const { email, username, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Пользователь уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        email,
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({message: "Пользователь успешно зарегистрирован"})
    } catch (e) {

    }
  }

  async login(req, res) {
    try {
    } catch (e) {}
  }

  async getUser(req, res) {
    try {
      res.json("server work");
    } catch (e) {}
  }
}

module.exports = new authController();
