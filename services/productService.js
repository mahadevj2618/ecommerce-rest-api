const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAllProducts();
  if (!products || products.length === 0) {
    const error = new Error('No products found');
    error.statusCode = 404;
    throw error;
  }
  return products;
};



const getById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) {
    const error = new Error('Product not found');
    error.statusCode = 404;
    throw error;
  }
  return product;
};



const createProduct = async (data) => {
  const addproduct = await productModel.createProduct(data);
  return addproduct;
}




const updateProduct = async (id, data) => {
  const result = await productModel.updateProduct(id, data);
  if (!result || result.affectedRows === 0) {
    const error = new Error('Product not found or update failed');
    error.statusCode = 404;
    throw error;
  }
  return result;
};



const deleteProduct = async (id) => {
  const deletedProduct = await productModel.deleteProduct(id);
  if (!deletedProduct || deletedProduct.affectedRows === 0) {
    const error = new Error('Product not found');
    error.statusCode = 404;
    throw error;
  }
  return deletedProduct;
};




module.exports = { getAll, getById, createProduct, updateProduct, deleteProduct };