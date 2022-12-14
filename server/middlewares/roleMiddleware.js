const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_SECRET;

//Check user's access level through his roles
module.exports = function(roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
  
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "Пользователь не авторизован" });
      }
      const {roles: userRoles} = jwt.verify(token, secret)
      let hasRole = false
      userRoles.forEach(role => {
        if(roles.includes(role)) {
          hasRole = true
        }
      })
      if(!hasRole) {
        return res.status(403).json({ message: "Нет доступа" });
      }
      next();
    } catch (e) {
      return res.status(403).json({ message: "Пользователь не авторизован" });
    }
  }
}