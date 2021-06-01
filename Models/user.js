const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
}) ;
//module.exports = mongoose.model("User",UserSchema);

exports.User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// var film = new Schema({
//     name: String,
//  })
// module.exports = mongoose.model("User", film)

