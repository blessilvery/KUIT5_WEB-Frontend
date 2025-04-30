import React, { useState } from "react";

const InputBar = ({ addProduct, categories }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  const [isCustom, setIsCustom] = useState(true);
  const getEnabledCategories = categories;

  return (
    <form>
      <select
        value={isCustom ? "__custom__" : newProduct.category}
        onChange={(e) => {
          const val = e.target.value;
          if (val === "__custom__") {
            setIsCustom(true);
            handleChange("", "category");
          } else {
            setIsCustom(false);
            handleChange(val, "category");
          }
        }}
      >
        <option value="">카테고리 선택...</option>
        {getEnabledCategories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
        <option value="__custom__">새 카테고리 직접 입력</option>
      </select>

      {isCustom && (
        <input
          type={"text"}
          value={newProduct.category}
          onChange={(e) => handleChange(e.target.value, "category")}
          placeholder="category..."
        />
      )}

      <input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type={"button"}>
        add new product
      </button>
      <input
        type={"checkbox"}
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <label>Is Stocked</label>
    </form>
  );
};

export default InputBar;
