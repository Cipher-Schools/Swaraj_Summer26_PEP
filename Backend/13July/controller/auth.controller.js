const arr = require("../storage/storage");
const { statusCodes, errMessage } = require("../utils/utils");
const jwt = require("jsonwebtoken");

const authLogin = (req, res, next) => {

  console.log(arr);
  try {
    const { username, password } = req.body;

    const isUserValid = arr.find(
      (item) => item.username == username && item.password == password,
    );
    if (isUserValid) {
      const token = jwt.sign(
        {
          id: isUserValid.id,
          username: isUserValid.username,
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
    }

    res.status(statusCodes.LOGIN).json({
      status: "SUCCESS",
      message: "LOGIN FAILED",
      token,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.LOGIN;
    next(error);
  }
};

const authSignUp = (req, res, next) => {
  console.log(arr);
  try {
    console.log(arr);
    const { username, password } = req.body;
    console.log(username, password);
    const obj = {
      id: Date.now,
      username,
      password,
    };

    console.log("Hello from the signup");

    arr.push(obj);
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
