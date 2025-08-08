const db = require('../config/db')

const createUser = async (data) => {
    const user = await db.query('INSERT INTO userregister (username, email, password, phone) values(?, ?, ?,?)', [data.username, data.email, data.password, data.phone])
    return user
}

const viewUser=async ()=>{
    const [users]= await db.query('select * from userregister')
    return users
}

const getUserById=async (id)=>{
    const [user] =await db.query('select * from userregister where id=?',[id])
    return user[0]
}

const deleteUser=async (id)=>{
    const [deleteuser]=await db.query('delete from userregister where id=?',[id])
    return deleteuser
}

const updateUser=async (id, data)=>{
    
    const [updateuser]=await db.query(`update userregister set username=?, phone=? where id=?`,[data.username, data.phone, id])
    return updateuser
}

const findUserByEmail=async (email)=>{
    const [user]=await db.query(`select * from userregister where email=? `,[email])
    return user[0]
}

module.exports = { createUser, viewUser, getUserById, deleteUser, updateUser, findUserByEmail}