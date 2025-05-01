import React from "react";
import DeleteProductRow from "./DeleteProductRow";
import ModifyProductRow from "./ModidyProductRow";

const ProductRow = ({ product }) => {
  const deleteProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <DeleteProductRow deleteProduct={deleteProduct} />
      </td>
      <td>
        <ModifyProductRow />
      </td>
    </tr>
  );
};

export default ProductRow;
