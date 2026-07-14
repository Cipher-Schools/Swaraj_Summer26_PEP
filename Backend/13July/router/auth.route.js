const express = require("express");
const authRouter = express.Router();
const {
  authSignUp,
  authError,
  authLogin,
} = require("../controller/auth.controller");

authRouter.post("/signup", authSignUp);
authRouter.post("/login", authLogin);
authRouter.post("/error", authError);

module.exports = authRouter;
