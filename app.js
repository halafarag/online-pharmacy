const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("/users", userRoute);

app.use((err, req, res) => {
  res.json({ status: "faild", message: err.message });
});
module.exports = app;
