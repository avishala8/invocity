const User = require("../models/user");

// exports.apiLogin = function (req, res) {
//   let user = new User(req.body);
//   user
//     .login()
//     .then(function (result) {
//       res.json({
//         token: jwt.sign(
//           {
//             _id: user.data._id,
//             username: user.data.username,
//             avatar: user.avatar,
//           },
//           process.env.JWTSECRET,
//           { expiresIn: tokenLasts }
//         ),
//         username: user.data.username,
//         avatar: user.avatar,
//       });
//     })
//     .catch(function (e) {
//       res.json(false);
//     });
// };
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
