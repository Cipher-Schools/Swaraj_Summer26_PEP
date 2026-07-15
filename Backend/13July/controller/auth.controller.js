const arr = require("../storage/storage");
const { statuCodes, errMessage } = require("../utils/utils");

const authLogin = (req, res) => {
  res.json("Hello from login");
};

const authSignUp = (req, res, next) => {
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
    error.status = statuCodes.DEFAULT;
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
