
const express=require("express")
const OrderController = require("../Controllers/OrderController")
const router=express.Router()

router.post("/add",OrderController.addorder)

module.exports=router