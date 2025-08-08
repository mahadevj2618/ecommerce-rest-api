const db = require('../config/db');

const getAllProducts = async () => {
    const [rows] = await db.query('select * from products');
    return rows;
};

const getProductById = async (id) => {
    const [row] = await db.query('select * from products where id=?', [id])
    return row[0]
}

const createProduct = async (data) => {
    const product = await db.query('INSERT INTO products (name, product_descr, price) values(?, ?, ?)', [data.name, data.product_descr, data.price])
    return product
}

const updateProduct = async (id, data) => {
    const [updateproduct] = await db.query('UPDATE products SET name = ? , product_descr = ?, price = ? WHERE id = ?', [data.name, data.product_descr, data.price, id]);
    return updateproduct
}

const deleteProduct = async (id) => {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result;
};



module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };