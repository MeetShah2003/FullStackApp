const { productModel } = require("../models/product.schema");

const getProduct = async (req, res) => {
    try {
        let allProduct = await productModel.find();
        return res.status(200).send(allProduct);
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        let addProduct = await productModel.create(req.body);
        return res.status(200).send(addProduct);
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
};

const userPayment = (req, res) => {
    
};

module.exports = { getProduct, createProduct, userPayment };