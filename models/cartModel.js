const db = require('../config/db')

const createCart = async (data) => {
    const [product] = await db.query('SELECT price FROM products WHERE id = ?', [data.product_id]);

    if (!product || product.length === 0) {
        throw new Error('Product not found');
    }

    const price = product[0].price;
    const cart_price = price * data.quantity;

    const [cartOrder] = await db.query('INSERT INTO cart (user_id, product_id, quantity, cart_price) values(?, ?, ?,?)', [data.user_id, data.product_id, data.quantity, cart_price])
    return cartOrder
}

const viewCart = async () => {
    const [cart] = await db.query(`select * from cart`)
    return cart
}

const cartByid = async (id) => {
    const [cartbyid] = await db.query(`select * from cart where id=?`, [id])
    return cartbyid[0]
}

const cartDelete = async (id) => {
    const [deletecart] = await db.query(`delete from cart where id=?`, [id])
    return deletecart
}

const updateCart = async (id, data) => {
    const [updateCart] = await db.query(`update cart set quantity=? where id=? `, [data.quantity, id])
    return updateCart;
}

const cartInfo = async () => {
    const [rows] = await db.query(`
        SELECT
            cart.id AS cart_id,
            userregister.id AS user_id,
            userregister.username AS user_name,
            userregister.email AS user_email,
            products.id AS product_id,
            products.name AS product_name,
            products.price AS product_price,
            cart.quantity AS cart_quantity,
            cart.cart_price AS total_cart_price
        FROM cart
        JOIN userregister ON cart.user_id = userregister.id
        JOIN products ON cart.product_id = products.id
    `);
    return rows;
};



const BycartDeatils = async (id) => {
    const [cart] = await db.query(`SELECT
            cart.id AS cart_id,
            userregister.id AS user_id,
            userregister.username AS user_name,
            userregister.email AS user_email,
            products.id AS product_id,
            products.name AS product_name,
            products.price AS product_price,
            cart.quantity AS cart_quantity,
            cart.cart_price AS total_cart_price
        FROM cart
        JOIN userregister ON cart.user_id = userregister.id
        JOIN products ON cart.product_id = products.id
        where cart.id=?`, [id]);

    return cart[0];
}



module.exports = { createCart, viewCart, cartByid, cartDelete, updateCart, cartInfo, BycartDeatils }