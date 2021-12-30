
const express=require("express")
const userController = require("../Controllers/UserController")
const router=express.Router()

router.get("/",userController.getAlluser)
router.post("/add",userController.postUser)
router.get("/name/:name/:age",userController.getUserByname)
router.delete("/delete/:uid",userController.dltUserByid)
router.patch("/update",userController.updtUserByid)
router.get("/:uid",userController.getUserByid)

module.exports=router