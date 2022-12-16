const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const app = express();

app.use("/", (req, res) => {
  res.send("welcome");
});
app.use("*", (req, res) => {
  res.status(404).json("Not found");
});
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use("/user", userRoute);

app.use((err, req, res) => {
  res.json({ status: "faild", message: err.message });
});
module.exports = app;
