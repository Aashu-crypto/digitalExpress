const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure the price is never negative
  },
  brandName: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 250, // Set a character limit
  },
  starrating: {
    type: Number,
  },
  size: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0, // Set initial stock to 0
  },
  categories: {
    type: [String], // Array for multiple categories
    // enum: ["Electronics", "Apparel", "Homeware", "Other"], // Limit to specific categories
  },
  imageUrl: {
    type: String,
   
  },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
