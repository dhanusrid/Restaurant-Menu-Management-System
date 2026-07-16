import React,{useState,useEffect} from "react";

function MenuForm({fetchItems,editItem,setEditItem}){

const [form,setForm] = useState({
name:"",
category:"",
price:"",
available:true,
image_url:""
});

useEffect(()=>{
if(editItem){
setForm(editItem);
}
},[editItem]);

const handleChange = (e)=>{
const {name,value,type,checked} = e.target;
setForm({
...form,
[name]: type==="checkbox" ? checked : value
});
};

const handleSubmit = async(e)=>{
e.preventDefault();

if(editItem){
await fetch(`http://localhost:5000/menu/${editItem.item_id}`,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(form)
});
setEditItem(null);
}else{
await fetch("http://localhost:5000/menu",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(form)
});
}

setForm({
name:"",
category:"",
price:"",
available:true,
image_url:""
});

fetchItems();
};

return(

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Item Name"
value={form.name}
onChange={handleChange}
/>

<input
name="category"
placeholder="Category"
value={form.category}
onChange={handleChange}
/>

<input
name="price"
placeholder="Price"
value={form.price}
onChange={handleChange}
/>

<label>
Available
<input
type="checkbox"
name="available"
checked={form.available}
onChange={handleChange}
/>
</label>

<input
name="image_url"
placeholder="Image URL"
value={form.image_url}
onChange={handleChange}
/>

<button type="submit">
{editItem ? "Update":"Add"}
</button>

</form>

);

}

export default MenuForm;