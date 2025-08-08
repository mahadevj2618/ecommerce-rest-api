const orderService = require('../services/orderService')


exports.viewOrders = async (req, res, next) => {
    try {
        const orders = await orderService.viewOrder();
        res.status(200).json({ orders: orders })
    }
    catch (err) {
        next(err)
    }
}


exports.createOrder = async (req, res, next) => {
    try {
        const data = req.body
        const order = await orderService.createOrder(data);
        res.status(201).json({ massege: "order created succefully", order })
    }
    catch (err) {
        next(err)
    }
}


exports.updateOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatorder = await orderService.updateOrder(id, data);
        res.status(200).json({ massege: "order updated succefully", updatorder })

    }
    catch (err) {
        next(err)
    }
}

exports.orderById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await orderService.orderById(id);
        res.status(200).json({ order: result })
    }
    catch (err) {
        next(err)
    }
}

exports.deleteOrderById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteorder = await orderService.deleteOrderById(id);
        res.status(200).json({ massege: `your order is deleted order id= ${id}`, deleteorder })
    }
    catch (err) {
        next(err)
    }
}

exports.allDeatils = async (req, res, next) => {
    try {
        const details = await orderService.allDeatils();
        res.status(200).json({ "details orders": details })
    }
    catch (err) {
        next(err)
    }
}