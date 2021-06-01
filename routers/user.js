const {User} = require("../Models/user");
const express = require("express");
// const bcrypt = require("bcryptjs");
const router = express.Router();
const app = express();
app.set("view engine","ejs");

router.get("/list",async (req,res) => {
  let datadb = await User.find();
  //console.log(data);
  // console.log(req.params.username);
  //res.status(200).json(data)
  // let data = JSON.parse(datadb)
  //console.log(datadb);
  res.render("list.ejs",{
    
    str: datadb
  })
})


router.post("/list",async (req,res) =>{
let user = new User({
        username:req.body.username
})

user = await user.save();

  if (!user) return res.status(404).send("the user cannot be created");

  //  res.json(user).then(() => {
  //   res.redirect("/");
  //  })
  res.redirect("/list");
})


router.post("/delete/:id?",(req,res) => {
  //console.log(req.params.id);
  User.findByIdAndRemove(req.params.id).then((User)=>{
    res.redirect("/list");
  
  })
 
})

router.post("/update/:id?", (req,res) => {
console.log(req.params.id);
// let user = new User({
//   username:req.body.username
// })

User.findByIdAndUpdate(req.params.id,{username:req.body.username},function (err, docs) {
  if (err){
      console.log(err)
  }
  else{
    res.redirect("/list");
  }})

// user = await user.save();

})


module.exports = router;