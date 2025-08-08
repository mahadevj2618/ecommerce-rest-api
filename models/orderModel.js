const db = require('../config/db')


const viewOrder = async () => {
    const [order] = await db.query('select * from orders')
    return order
}


const createorder = async (data) => {
    const [product] = await db.query('SELECT price FROM products WHERE id = ?', [data.product_id]);

    if (!product || product.length === 0) {
        throw new Error('Product not found');
    }
    const price = product[0].price;
    const total_price = price * data.quantity;
    const [order] = await db.query('INSERT INTO orders (user_id, product_id, quantity, total_price) values(?, ?, ?,?)', [data.user_id, data.product_id, data.quantity, total_price])
    return order
}


const updatedOrder = async (id, data) => {
    const [product] = await db.query('select price from products where id=?', [data.product_id])
    if (!product || product.length === 0) {
        throw new Error('Product not found');
    }
    const price = product[0].price;
    const total_price = price * data.quantity;

    const [updateOrder] = await db.query(
        `UPDATE orders SET product_id = ?, quantity = ?, total_price = ? WHERE id = ?`, [data.product_id, data.quantity, total_price, id]);
    return updateOrder
}


const orderById = async (id) => {
    const [result] = await db.query('select * from orders where id=?', [id]);
    return result[0];
}

const deleteOrderById = async (id) => {
    const [delOrder] = await db.query('delete from orders where id=?', [id]);
    return delOrder;
}


const allDetails = async () => {
    const [details] = await db.query(`SELECT
        orders.id AS order_id,
        userregister.id AS user_id,
        userregister.username AS user_name,
        userregister.email,
        products.id AS product_id,
        products.name AS product_name,
        products.price,
        orders.quantity,
        orders.total_price
        FROM orders
        JOIN userregister ON orders.user_id = userregister.id
        JOIN products ON orders.product_id = products.id`)
    return details;
}

module.exports = { viewOrder, createorder, updatedOrder, orderById, deleteOrderById, allDetails }