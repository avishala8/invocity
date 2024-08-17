const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.apiLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password_hash))) {
    const token = jwt.sign(
      { phoneNumber: user.phoneNumber },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      token: token,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } else if (user) {
    res.status(401).json({ error: "email is valid but incorrect password" });
  } else {
    res.status(404).json({ error: "User is not registered!" });
  }
};
exports.register = async (req, res) => {
  const { phoneNumber, username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    const existingphone = await User.findOne({ email });
    if (existingphone) {
      return res.status(400).json({ error: "Phone Number already registered" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await User.create({
      phoneNumber,
      username,
      email,
      password_hash: hashedPassword,
    });
    if (newUser) {
      const token = jwt.sign(
        { phoneNumber: newUser.phoneNumber },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.status(201).json({
        token: token,
        _id: newUser._id,
        name: newUser.username,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.checkToken = function (req, res) {
  try {
    req.apiUser = jwt.verify(req.body.token, process.env.JWT_SECRET);
    res.json(true);
  } catch (e) {
    res.json(false);
  }
};
