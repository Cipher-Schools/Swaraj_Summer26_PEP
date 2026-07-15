const express = require("express");
const userRouter = express.Router();
const {
    userHome
} = require("../controller/user.controller");



userRouter.get("/home", userHome);

module.exports = userRouter;