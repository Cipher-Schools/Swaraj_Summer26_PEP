const express = require("express");
const fs = require("fs");
require("dotenv").config();

const app = express();

const authRouter = require("./router/auth.route");
const errorHandler = require("./middlewares/errror.middleware");

// Before AUTH MIDDLEWARE



app.use(express.json());

app.use((req, res, next) => {
  if (fs.existsSync("logger.json")) {
    fs.appendFileSync("logger.json", `${req.method} ${req.url} ${req.ip}\n`);
  } else {
    fs.readFile("logger.json", "utf8", (err) => {
      fs.appendFileSync("logger.json", `${req.method} ${req.url} ${req.ip}\n`);
    });
  }

  console.log(`${req.method} ${req.url} ${req.ip}`);
  next();
});

app.use("/auth/", authRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  console.log(`PORT STARTED ON ${process.env.PORT || 8080}`);
});
