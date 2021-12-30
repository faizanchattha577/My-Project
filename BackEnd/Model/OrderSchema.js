const mongoose=require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");

const   OrderSchema =mongoose.Schema({
userid:String,
date:String,
paymentMethod:String,
P_Detail:String,
Services:[]


})

OrderSchema.plugin(uniqueValidator);
module.exports = mongoose.model("order",OrderSchema);
