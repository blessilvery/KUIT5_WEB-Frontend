import React, { useState } from 'react'

const InputBar = ({addProduct}) => {
    const[newProduct,setNewProduct] = useState({
        category:"",
        price:"",
        stocked: true,
        name:"",
    });
    
    const handleChange = (value,label) => {
        setNewProduct((prev) => ({...prev,[label]:value}));
    };

    const handleAddNewProduct = () => {
        addProduct(newProduct);
    };

  return (
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="Category..."
      />
      <input
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
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="Name..."
      />
      <button onClick={handleAddNewProduct} type="button">
        Add New Product
      </button>
    </form>
  )
}

export default InputBar