import React, { useEffect, useState } from "react";
import MenuForm from "./MenuForm";

function MenuList() {

  const [items,setItems] = useState([]);
  const [editItem,setEditItem] = useState(null);
  const [search,setSearch] = useState("");

  const fetchItems = async () =>{
    const res = await fetch("http://localhost:5000/menu");
    const data = await res.json();
    setItems(data);
  };

  useEffect(()=>{
    fetchItems();
  },[]);

  const deleteItem = async(id)=>{
    if(window.confirm("Are you sure?")){
      await fetch(`http://localhost:5000/menu/${id}`,{
        method:"DELETE"
      });
      fetchItems();
    }
  };

  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:"20px"}}>

      <MenuForm fetchItems={fetchItems} editItem={editItem} setEditItem={setEditItem}/>

      <input
        placeholder="Search..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <table border="1" width="100%" style={{marginTop:"20px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Available</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        {filtered.map(item=>(
          <tr key={item.item_id}>
            <td>{item.item_id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.available ? "Yes":"No"}</td>
            <td>
              <img src={item.image_url} width="50" alt=""/>
            </td>

            <td>
              <button onClick={()=>setEditItem(item)}>Edit</button>
              <button onClick={()=>deleteItem(item.item_id)}>Delete</button>
            </td>

          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}

export default MenuList;