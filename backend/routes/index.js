const express = require("express");
const router = express.Router();
const UserLogin = require("./UserLogin");
router.use("/user", UserLogin);
module.exports = router;
