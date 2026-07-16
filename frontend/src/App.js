
// import React, {useState,useEffect} from "react";
// import axios from "axios";
// import "./App.css";

// function App(){

// const [menus,setMenus]=useState([]);
// const [name,setName]=useState("");
// const [category,setCategory]=useState("");
// const [price,setPrice]=useState("");
// const [image,setImage]=useState("");

// useEffect(()=>{
// fetchMenus();
// },[]);

// const fetchMenus = async ()=>{
// const res = await axios.get("http://localhost:5000/menus");
// setMenus(res.data);
// }

// const addMenu = async ()=>{
// await axios.post("http://localhost:5000/menus",{
// name,
// category,
// price,
// image,
// available:"Yes"
// });
// fetchMenus();
// }

// const deleteMenu = async(id)=>{
// await axios.delete(`http://localhost:5000/menus/${id}`);
// fetchMenus();
// }

// return(

// <div className="container">

// <h1>🍴 Restaurant Menu</h1>

// <div className="form">

// <input placeholder="Food Name"
// value={name}
// onChange={(e)=>setName(e.target.value)}
// />

// <input placeholder="Category"
// value={category}
// onChange={(e)=>setCategory(e.target.value)}
// />

// <input placeholder="Price"
// value={price}
// onChange={(e)=>setPrice(e.target.value)}
// />

// <input placeholder="Image URL"
// value={image}
// onChange={(e)=>setImage(e.target.value)}
// />

// <button onClick={addMenu}>Add Item</button>

// </div>

// <table>

// <thead>
// <tr>
// <th>Name</th>
// <th>Category</th>
// <th>Price</th>
// <th>Image</th>
// <th>Action</th>
// </tr>
// </thead>

// <tbody>

// {menus.map(menu=>(
// <tr key={menu._id}>

// <td>{menu.name}</td>
// <td>{menu.category}</td>
// <td>₹{menu.price}</td>

// <td>
// <img src={menu.image} alt="" />
// </td>

// <td>
// <button onClick={()=>deleteMenu(menu._id)}>Delete</button>
// </td>

// </tr>
// ))}

// </tbody>

// </table>

// </div>

// )

// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

const [menus,setMenus] = useState([]);

const [name,setName] = useState("");
const [category,setCategory] = useState("");
const [price,setPrice] = useState("");
const [image,setImage] = useState("");

useEffect(()=>{
fetchMenus();
},[]);

const fetchMenus = async ()=>{
const res = await axios.get("http://localhost:5000/menus");
setMenus(res.data);
}

const addMenu = async ()=>{

await axios.post("http://localhost:5000/menus",{
name,
category,
price,
image,
available:"Yes"
})

setName("")
setCategory("")
setPrice("")
setImage("")

fetchMenus();

}

const deleteMenu = async(id)=>{
await axios.delete(`http://localhost:5000/menus/${id}`)
fetchMenus();
}

return(

<div className="background">

<div className="content">

<h1>🍴 Restaurant Menu</h1>

<div className="form">

<input
placeholder="Food Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Category"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
placeholder="Image URL"
value={image}
onChange={(e)=>setImage(e.target.value)}
/>

<button onClick={addMenu}>Add Item</button>

</div>

<table>

<thead>
<tr>
<th>Name</th>
<th>Category</th>
<th>Price</th>
<th>Image</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{menus.map(menu=>(
<tr key={menu._id}>

<td>{menu.name}</td>
<td>{menu.category}</td>
<td>₹{menu.price}</td>

<td>
<img src={menu.image} alt="" />
</td>

<td>
<button onClick={()=>deleteMenu(menu._id)}>
Delete
</button>
</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default App;