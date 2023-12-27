const { Router } = require("express");
const { createProduct, getProduct } = require("../controller/product.controller");
const productRoute = Router();

// get all products
productRoute.get("/home",getProduct);

// create product
productRoute.post("/create",createProduct);

// payment Route
productRoute.post("/payment");

module.exports = { productRoute };