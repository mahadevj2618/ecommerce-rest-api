const cartService = require('../services/cartService')


exports.createCart = async (req, res, next) => {
    try {
        const data = req.body;
        const createcart = await cartService.createCart(data);
        res.status(200).json({ massege: "cart created succusefully", cart: createcart })
    }
    catch (err) {
        next(err)
    }
}


exports.viewCart = async (req, res, next) => {
    try {
        const cart = await cartService.viewCart();
        res.status(200).json({ cartt: cart })
    }
    catch (err) {
        next(err)
    }
}


exports.cartById = async (req, res, next) => {
    try {
        const id = req.params.id
        const cart = await cartService.cartByid(id);
        res.status(200).json({ cartt: cart })
    }
    catch (err) {
        next(err)
    }
}


exports.deleteCart = async (req, res, next) => {
    try {
        const id = req.params.id;
        const cartdelete = await cartService.deleteCart(id);
        res.status(200).json({ massege: `cart delete id= ${id}`, cartdelete: cartdelete })
    }
    catch (err) {
        next(err)
    }
}


exports.updateCart = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatecart = await cartService.updateCart(id, data);
        res.status(200).json({ massege: `updated cart id= ${id}`, updatecart: updatecart })
    }
    catch (err) {
        next(err)
    }
}


exports.cartInfo = async (req, res, next) => {
    try {
        const result = await cartService.cartInfo();
        res.status(200).json({ message: "All cart data", cart: result });
    } catch (err) {
        next(err);
    }
};


exports.BycartDeatils = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await cartService.BycartDeatils(id);
        res.status(200).json({ massege: " cart", allcart: result })
    }
    catch (err) {
        next(err)
    }
}
