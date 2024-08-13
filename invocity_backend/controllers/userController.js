const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.apiLogin = function (req, res) {
  let user = new User(req.body);

  user
    .login()
    .then(function (result) {
      // .env not loading the jwtsecret variable
      res.json({
        token: jwt.sign(
          { phoneNumber: user.data.phoneNumber },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        ),
        phoneNumber: user.data.phoneNumber,
      });
    })
    .catch(function (e) {
      res.status(401).send({ error: e }); // 401 Unauthorized for login errors
    });
};
exports.apiRegister = function (req, res) {
  let user = new User(req.body);
  user
    .register()
    .then(() => {
      res.json({
        token: jwt.sign(
          { phoneNumber: user.data.phoneNumber },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        ),
        phoneNumber: user.data.phoneNumber,
      });
    })
    .catch((regErrors) => {
      // res.status(500).send(regErrors);
      res.status(409).json({
        success: false,
        message: "User already exists",
      });
    });
};

exports.checkToken = function (req, res) {
  try {
    req.apiUser = jwt.verify(req.body.token, process.env.JWT_SECRET);
    res.json(true);
  } catch (e) {
    res.json(false);
  }
};
