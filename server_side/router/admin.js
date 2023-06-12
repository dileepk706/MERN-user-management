const express=require('express')
const router=express.Router()
const { verifyToken } = require('../middleware/adminJwtAuthentication')
const {login}=require('../controller/admin/Login')
const { getAllUsers,searchUser,deleteUser } = require('../controller/admin/userManagement')
 
router.post('/api/login',login)
router.get('/',verifyToken,getAllUsers)
router.get('/api/search',verifyToken,searchUser)
router.delete('/api/deleteuser',verifyToken,deleteUser)

module.exports=router