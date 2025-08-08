const productService = require('../services/productService');


exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAll();
        res.status(200).json({ products });
    } catch (err) {
        next(err);
    }
};


exports.getById = async (req, res, next) => {
    try {
        const id=req.params.id;
        const product = await productService.getById(id);
        res.status(200).json({product:product});
    } catch (err) {
        next(err);
    }
}


exports.creacteProduct = async (req, res, next) => {
    try {
        const data = req.body
        const product = await productService.createProduct(data)
        res.status(201).json({ massege: "product created succefully", product: product })
    }
    catch (err) {
        next(err)
    }
}


exports.updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const update = await productService.updateProduct(id, data)
        res.status(200).json({ massege: " product update succefully", product:update })
    }
    catch (err) {
        next(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletepro = await productService.deleteProduct(id);
        res.status(200).json({ massage: "your product is deleted", DeletedProduct: deletepro })
    }
    catch (err) {
        next(err)
    }
}
