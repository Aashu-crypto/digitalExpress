const express = require("express");
const router = express.Router();
const UserLoginRouter = require("./UserLogin");
const productRouter = require("./productDetails");
router.use("/user", UserLoginRouter);
router.use("/products", productRouter);

module.exports = router;

