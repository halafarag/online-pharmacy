const mongoose = require("mongoose");
const { Schema } = mongoose;
const favSchema = new Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Favourite = mongoose.model("Favourite", favSchema);
module.exports = Favourite;
