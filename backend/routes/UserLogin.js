const express = require("express");
const router = express.Router();
const userController = require("../controllers/userSign");
router.get("/login", userController.userLogin);

module.exports = router;
