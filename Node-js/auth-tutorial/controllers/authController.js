const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const User = require("../models/user");

exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  //   const user = { id: 1, username: "test", password: "$2s" };
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res.redirect("/dashboard?token=" + token);
    } else {
      res.send("Login Falied");
    }
  } catch (error) {
    res.status(500).send();
  }
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = async (req, res) => {
  try {
    let user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    user = await user.save();
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(hashedPassword);
    res.redirect("/login");
  } catch {
    res.status(500).send();
  }
};

exports.getDashboard = (req, res) => {
  try {
    const token = req.query.token;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.render("dashboard", { user: verified });
  } catch (error) {
    console.log(error);
    res.send("Access denied");
  }
};
