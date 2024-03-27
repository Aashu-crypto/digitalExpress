const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  item: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      name: String,
      price: Number,

      quantity: { type: Number, default: 1 },
    },
  ],
});

const cart = mongoose.model("CartItems", cartSchema);
module.exports = cart;
