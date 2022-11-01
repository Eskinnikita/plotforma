const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: "24h" });
};
class authController {
  async registation(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
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
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {}
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь с почтой ${email} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }
      const token = generateAccessToken(user._id, user.roles);
      res.json({ token });
    } catch (e) {}
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {}
  }
}

module.exports = new authController();
