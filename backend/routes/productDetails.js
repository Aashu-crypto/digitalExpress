const express = require("express");
const {
  productsDetailsController,
  productsController,
  productsEdit,
} = require("../controllers/productsDetailsController");
const router = express.Router();

router.get("/details", productsDetailsController);
router.post("/addProduct", productsController);
router.put("/editProduct/:id", productsEdit);
module.exports = router;
