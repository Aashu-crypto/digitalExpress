const express = require("express");
const {
  productsDetailsController,
  productsController,
  productsEdit,
  getProductController,
  addTocart,
  getCartItems,
  deleteCartItem
} = require("../controllers/productsDetailsController");
const router = express.Router();

router.get("/details", productsDetailsController);
router.post("/addProduct", productsController);
router.put("/editProduct/:id", productsEdit);
router.get("/getProduct/:id", getProductController);
router.post("/addCart", addTocart);
router.get("/cartItems/:id",getCartItems)
router.put('/deleteCartItem',deleteCartItem)

module.exports = router;
