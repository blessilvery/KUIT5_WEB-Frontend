import React, { useState } from "react";

const DeleteProductRow = ({ deleteProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleDeleteProduct = () => {};

  return (
    <button onClick={handleDeleteProduct} type={"button"}>
      삭제
    </button>
  );
};

export default DeleteProductRow;
