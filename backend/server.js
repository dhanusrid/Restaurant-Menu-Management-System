const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB connection */

mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Schema */

const MenuSchema = new mongoose.Schema({
name:String,
category:String,
price:Number,
image:String,
available:String
});

const Menu = mongoose.model("Menu",MenuSchema);

/* GET MENUS */

app.get("/menus",async(req,res)=>{

const menus = await Menu.find();
res.json(menus);

});

/* ADD MENU */

app.post("/menus",async(req,res)=>{

try{

const {name,category,price,image,available} = req.body;

const newMenu = new Menu({
name,
category,
price,
image,
available
});

await newMenu.save();

res.json(newMenu);

}

catch(err){

console.log(err);
res.status(500).json({error:"Server error"});

}

});

/* DELETE MENU */

app.delete("/menus/:id",async(req,res)=>{

try{

await Menu.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

}

catch(err){

res.status(500).json({error:"Delete error"});

}

});

/* SERVER */

app.listen(5000,()=>{
console.log("Server running on port 5000");
});