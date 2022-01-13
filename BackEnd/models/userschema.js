const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userschema = Schema({
    name: String,
    password: { type: String },
    email: { type: String },
    phonenumber:{type:String},
    address:{type:String}
})

module.exports = mongoose.model("User", userschema);
// User is a name of Collection in DB