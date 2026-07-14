const express = require("express");
require("dotenv").config();

const app = express();

const authRouter = require("./router/auth.route");

app.use(express.json());

app.use("/auth/", authRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(`PORT STARTED ON ${process.env.PORT || 8080}`);
});