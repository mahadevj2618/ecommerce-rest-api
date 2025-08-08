const cartModel = require('../models/cartModel')


const createCart = async (data) => {
    const result = await cartModel.createCart(data);
    if (!result) {
        const error = new Error('not created cart!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


const viewCart = async () => {
    const result = await cartModel.viewCart();
    if (!result || result.length === 0) {
        const error = new Error('not fatching!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


const cartByid = async (id) => {
    const result = await cartModel.cartByid(id);
    if (!result) {
        const error = new Error('not found cart!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


const deleteCart = async (id) => {
    const result = await cartModel.cartDelete(id);
    if (!result || result.affectedRows === 0) {
        const error = new Error('not found cart!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


const updateCart = async (id, data) => {
    const result = await cartModel.updateCart(id, data);
    if (!result || result.affectedRows === 0) {
        const error = new Error('not found cart!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


const cartInfo = async () => {
    const result = await cartModel.cartInfo();
    if (!result) {
        const error = new Error('not fetching!')
        error.statusCode = 404;
        throw error;
    }
    return result;
};


const BycartDeatils = async (id) => {
    const result = await cartModel.BycartDeatils(id);
    if (!result) {
        const error = new Error('not found card details!')
        error.statusCode = 404;
        throw error;
    }
    return result;
}


module.exports = { createCart, viewCart, cartByid, deleteCart, updateCart, cartInfo, BycartDeatils }