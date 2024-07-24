const User = require("../models/user");

exports.apiLogin = function (req, res) {
  let user = new User(req.body);
  user
    .login()
    .then(function (result) {
      // res.json(result);
      res.status(200).send("User login successful");
    })
    .catch(function (e) {
      res.status(500).send({ error: e });
    });
};
exports.apiRegister = function (req, res) {
  let user = new User(req.body);
  user
    .register()
    .then(() => {
      res.status(200).send("User registered successfully");
    })
    .catch((regErrors) => {
      res.status(500).send(regErrors);
    });
};
