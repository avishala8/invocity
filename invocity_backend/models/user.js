const usersCollection = require("../db").db("Users").collection("Users");

let User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.login = function () {
  return new Promise(async (resolve, reject) => {
    let user = await usersCollection.findOne({
      phoneNumber: this.data.phoneNumber,
    });
    if (!user) {
      this.errors.push("Phone Number is not Registered or Invalid.");
      return reject(this.errors);
    }
    resolve(user);
  });
};

User.prototype.register = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      let existingUser = await usersCollection.findOne({
        phoneNumber: this.data.phoneNumber,
      });
      if (existingUser) {
        this.errors.push("Phone Number is already Registered");
        return reject(this.errors);
      }
      try {
        const result = await usersCollection.insertOne(this.data);
        resolve("User Registered");
      } catch (err) {
        this.errors.push("Error Occured while registering");
        reject(err);
      }
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
