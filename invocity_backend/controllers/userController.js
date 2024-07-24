const User = require("../models/user");

exports.apiLogin = function (req, res) {
  let user = new User(req.body);
  user
    .login()
    .then(function (result) {
      res.status(200).send("User login successful");
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
      res.status(200).send("User registered successfully");
    })
    .catch((regErrors) => {
      // res.status(500).send(regErrors);
      res.status(409).json({
        success: false,
        message: "User already exists",
      });
    });
};

// exports.ifUserExists = function (req, res, next) {
//   User.findone(req.params.phoneNumber)
//     .then(function (userDocument) {
//       req.profileUser = userDocument;
//       next();
//     })
//     .catch(function (e) {
//       res.json(false);
//     });
// };
