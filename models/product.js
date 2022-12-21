const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
    img: {
      type: Array,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
