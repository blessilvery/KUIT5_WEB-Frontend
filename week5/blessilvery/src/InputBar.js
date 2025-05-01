import React, { useState } from 'react'


const InputBar = ({addProduct, productToEdit}) => {
    const[newProduct,setNewProduct] = useState({
        category:"",
        price:"",
        stocked: true,
        name:"",
    });

    if (productToEdit) {
      setNewProduct(productToEdit);
      var change = document.getElementById("category");
      change.value = newProduct.category;
      change = document.getElementById("price");
      change.value = newProduct.price;
      change = document.getElementById("name");
      change.value = newProduct.name;
    }

    const handleChange = (value,label) => {
        setNewProduct((prev) => ({...prev,[label]:value}));
    };

    const handleAddNewProduct = () => {
        addProduct(newProduct);
    };

  return (
    <form>
      <input
        id = "category"
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="Category..."
      />
      <input
      id = "price"
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="Price..."
      />
      <select
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.value, "stocked")}
      >
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <input
        id = "name"
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        style={{
          color: newProduct.stocked ?  "black" : "red", // stocked가 true면 검정색, false면 빨간색
        }}
        placeholder="Name..."
      />
      <button onClick={handleAddNewProduct} type="button">
        Add New Product
      </button>
    </form>
  )
}

export default InputBar