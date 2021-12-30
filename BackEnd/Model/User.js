const mongoose=require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");

const UserSchema =mongoose.Schema({
  fname:{type:String},
  lname:{type:String},
  email:{type:String,require: true,unique: true},
  phone:String,
  password:String,
  address:String,
  cart:[]

})

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User",UserSchema);
