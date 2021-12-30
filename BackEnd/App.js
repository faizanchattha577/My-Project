const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/UserRouter");
const OrderRouter=require("./Routes/OrderRoutes")

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/user", UserRouter);
app.use("/order", OrderRouter);


mongoose
  .connect("mongodb://localhost:27017/eworker")
  .then(() => {
    console.log("connected");
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Error", err);
  });
