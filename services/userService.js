const usermodel = require('../models/userModel')

const createUser = (data) => {
    const result= usermodel.createUser(data);
    if(!result){
        const error=new Error('user not created!')
        error.statusCode = 404;
        throw error;  
    }
    return result;
}

const viewUser=async ()=>{
    const result= await usermodel.viewUser();
    if(!result || result.length === 0){
        const error=new Error('not found')
        error.statusCode=404;
        throw error;
    }
    return result
}

const getById=async (id)=>{
    const result= await usermodel.getUserById(id);
    if(!result)
    {
        const error=new Error('user not found');
        error.statusCode=404;
        throw error;
    }
    return result
}

const deleteById=async (id)=>{
    const [result]= await usermodel.deleteUser(id);
    if(!result)
    {
        const error=new Error('user not found')
        error.statusCode=404
        throw error;
    }
    return result
}

const updateUser=async (id, data)=>{
    const result=await usermodel.updateUser(id, data);
    if(!result || result.affectedRows === 0){
        const error=new Error('user not found');
        error.statusCode=404;
        throw error;
    }
    return result
}

const findUserByEmail=async (email)=>{
    const result= await usermodel.findUserByEmail(email);
    if(!result){
        const error=new Error('email not found')
        error.statusCode=404;
        throw error
    }
    return result
}

module.exports = { createUser, viewUser, getById, deleteById, updateUser,findUserByEmail }