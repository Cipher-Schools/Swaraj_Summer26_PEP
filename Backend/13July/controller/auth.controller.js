// const arr = require("../storage/storage");
const { statusCodes, errMessage } = require("../utils/utils");
const jwt = require("jsonwebtoken");
const User = require("../model/user.schema");
const bcrypt = require("bcrypt");

const authLogin = async (req, res, next) => {
  // console.log(arr);
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    // console.log(existingUser);

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );
    const isUserValid =
      isPasswordValid && existingUser && email == existingUser.email;

    // console.log(isPasswordValid);

    // const isUserValid = arr.find(
    //   (item) => item.username == username && item.password == password,
    // );
    if (isUserValid) {
      const token = jwt.sign(
        {
          id: existingUser._id,
          username: existingUser.name,
          status: existingUser.isActive,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        },
      );

      res.status(statusCodes.SUCCESS).json({
        status: "SUCCESS",
        message: "Login Successfull",
        token,
      });
    } else {
      res.status(statusCodes.LOGIN).json({
        status: "SUCCESS",
        message: "LOGIN FAILED",
        token,
      });
    }
  } catch (err) {
    const error = new Error(err);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.LOGIN;
    next(error);
  }
};

const authSignUp = async (req, res, next) => {
  try {
    let { name, email, mobile, age, city, isActive, password } = req.body;

    // console.log(req.body);

    const existingUser = await User.findOne({ email });
    // console.log(existingUser);
    if (existingUser) {
      // throw new Error("User already exists"); // Custom Error Check --
      return res.status(409).json({
        status: "ERROR",
        message: "User already exists",
      });
    }

    const username = name;

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    console.log(password);

    User.create({
      name,
      email,
      mobile,
      age,
      city,
      isActive,
      password,
    });

    res.status(201).json({
      status: "SUCCESS",
      message: "User Created successfully",
    });
  } catch (err) {
    const error = new Error(err);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.SIGNUP;
    next(error);
  }
};

const authError = (req, res) => {
  res.json("Error PAge");
};

module.exports = {
  authSignUp,
  authError,
  authLogin,
};
