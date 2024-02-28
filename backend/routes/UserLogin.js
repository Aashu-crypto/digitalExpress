const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const userController = require("../controllers/userSign");
router.post("/login", authMiddleware, userController.userLogin);

router.post("/createUser", userController.userCreate);

module.exports = router;
