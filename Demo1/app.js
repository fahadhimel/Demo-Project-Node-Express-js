const express = require("express");
const app = express();
const userRouter = require("./routers/user.router");

app.use(userRouter);

module.exports = app;
