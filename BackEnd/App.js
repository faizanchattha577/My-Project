const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const orderRouter = require("./routes/orderRouter")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/user", userRouter);
app.use("/order", orderRouter)

mongoose
  .connect("mongodb://localhost:27017/worker")
  .then(() => {
    console.log("connected");
    app.listen(5000);
  })
  .catch((err) => {
    console.log("error", err);
  });
