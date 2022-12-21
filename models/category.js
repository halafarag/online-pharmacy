const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 100,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
