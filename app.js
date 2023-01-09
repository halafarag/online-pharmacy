const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoutes");
const subCateRoute = require("./routes/subCatRoute");
const productRoute = require("./routes/productRouts");
const cartRoute = require("./routes/cartRoute");
const favsRoute = require("./routes/favsRouts");
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
app.use("/category", categoryRoute);
app.use("/subcat", subCateRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/fav", favsRoute);

app.use((err, req, res) => {
  res.json({ status: "faild", message: err.message });
});
module.exports = app;
