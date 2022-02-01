const express = require("express");
const {
  fetchAllProducts,
  createNewProduct,
  getProductId,
  deleteProductId,
} = require("../controller/product.controller");

const router = express();
//get all product list
router.get("/products", fetchAllProducts);

//get a product id of
router.get("/products/:id", getProductId);

// add a new product to the list
router.post("/products", createNewProduct);

// delete a product id of
router.delete("/products/:id", deleteProductId);

module.exports = router;
