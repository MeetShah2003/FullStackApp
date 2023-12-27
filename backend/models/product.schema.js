const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img: String,
    title: String,
    description: String,
    size: String,
    price: Number,
    color: String
});

const productModel = new mongoose.model("product52", productSchema);

module.exports = { productModel };