const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
const mongodbURI = process.env.MONGODB_URI;
mongoose.connect(mongodbURI);
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
