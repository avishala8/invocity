const usersCollection = require("../db").db().collection("Users");

let User = function (data) {
  this.data = data;
  this.errors = [];
};

// User.prototype.login = function () {
//   return async () => {
//     let user = await usersCollection.findOne({
//       phoneNumber: this.data.phoneNumber,
//     });
//     if (user) {
//       console.log("Login Successfull");
//     } else {
//       console.log("Phone Number is not Registered or Invalid.");
//     }
//   };
// };

User.prototype.register = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      const err = await usersCollection.insertOne(this.data);
      console.log(err);
      resolve();
    } else {
      reject(this.errors);
    }
  });
};
// User.prototype.register = async function () {
//   if (!this.errors.length) {
//     try {
//       await usersCollection.insertOne(this.data);
//       console.log("User registered successfully");
//     } catch (err) {
//       console.error("Error registering user:", err);
//     }
//   } else {
//     console.error("Error:", this.errors);
//   }
// };
module.exports = User;
