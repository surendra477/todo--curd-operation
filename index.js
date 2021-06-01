const express = require('express');
const app = express();
const mongoose              =  require("mongoose");
const passport              =  require("passport");
const bodyParser            =  require("body-parser");
const LocalStrategy         =  require("passport-local");
const passportLocalMongoose =  require("passport-local-mongoose");
const User =  require("./Models/user")
const fetch = require("node-fetch");
const axios = require('axios');
mongoose.connect("mongodb://127.0.0.1:27017/todo",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}).then(()=>{
    console.log("database connected");
});
// fetch("/data",(req,res) => {
//     console.log(res);
// })

// axios.get('http://localhost:3000/data')
//   .then(response => {
//     console.log(response);
//   //  console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });


app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs");
// app.get('/list',(req,res) => {
// res.render("list")
// })
const usersRoutes = require("./routers/user");
app.use(`/`, usersRoutes)
// app.post('/list',(req,res)=>{
// var data = {
//     name:req.body.username
// }
// new Film(data)
// })


app.listen('3000',()=>{
    console.log("server is running on port 3000");
})