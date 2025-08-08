const orderModel = require('../models/orderModel')


// exports.orderservice = async (req, res, next) => {
//     try {
//         this.viewOrder = async () => {
//             const result = await orderModel.viewOrder();
//             if (!result || result.length === 0) {
//                 const error = new Error('somthing is wrong')
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return result;
//         }

//         this.createOrder = async (data) => {
//             const result = await orderModel.createorder(data);
//             if (!result) {
//                 const error = new Error('order not created!')
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return result;
//         }

//         this.updateOrder = async (id, data) => {
//             const result = await orderModel.updatedOrder(id, data);
//             if (!result || result.affectedRows === 0) {
//                 const error = new Error('something is wrong')
//                 error.statusCode = 404;
//                 throw error
//             }
//             return result;
//         }

//         this.orderById = async (id) => {
//             const result = await orderModel.orderById(id);
//             if (!result) {
//                 const error = new Error('order not found')
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return result;
//         }

//         this.deleteOrderById = async (id) => {
//             const result = await orderModel.deleteOrderById(id);
//             if (!result || result.affectedRows === 0) {
//                 const error = new Error("your order not found")
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return result;
//         }


//         this.allDeatils = async () => {
//             const result = await orderModel.allDetails();
//             if (!result) {
//                 const error = new Error("not fetching")
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return result;
//         }
//     }
//     catch (err) {
//         next(err)
//     }
// }


const viewOrder = async () => {
    const result= await orderModel.viewOrder();
    if(!result || result.length===0){
        const error=new Error('somthing is wrong')
        error.statusCode=404;
        throw error;
    }
    return result;
}

const createOrder = async (data) => {
    const result=await orderModel.createorder(data);
    if(!result){
        const error=new Error('order not created!')
        error.statusCode=404;
        throw error;
    }
    return result;
}

const updateOrder = async (id, data) => {
    const result=await orderModel.updatedOrder(id, data);
    if(!result || result.affectedRows===0){
        const error= new Error('something is wrong')
        error.statusCode=404;
        throw error
    }
    return result;
}

const orderById = async (id) => {
    const result=await orderModel.orderById(id);
    if(!result){
        const error=new Error('order not found')
        error.statusCode=404;
        throw error;
    }
    return result;
}

const deleteOrderById = async (id) => {
    const result=await orderModel.deleteOrderById(id);
    if(!result || result.affectedRows===0){
        const error =new Error("your order not found")
        error.statusCode=404;
        throw error;
    }
    return result;
}


const allDeatils = async () => {
    const result= await orderModel.allDetails();
    if(!result){
        const error=new Error("not fetching")
        error.statusCode=404;
        throw error;
    }
    return result;
}

module.exports = { viewOrder, createOrder, updateOrder, orderById, deleteOrderById, allDeatils }