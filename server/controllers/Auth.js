const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Account already exists with this email id",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (e) {
    console.error(e);
    console.log("Error in Auth controller: register");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Sign up first",
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.json({
        success: "false",
        message: "Invalid Password",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      const options = {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      };
      return res.cookie("token", token, options).json({
        success: true,
        token: token,
        message: "Logged in successfully",
      });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the login controller",
    });
  }
};
