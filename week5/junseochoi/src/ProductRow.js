import { useState } from "react";
import DeleteProductRow from "./DeleteProductRow";
import ModifyProductRow from "./ModidyProductRow";

const ProductRow = ({ product, setProducts }) => {
  const deleteProduct = (productToDelete) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.name !== productToDelete.name)
    );
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <DeleteProductRow product={product} deleteProduct={deleteProduct} />
      </td>
      <td>
        <ModifyProductRow />
      </td>
    </tr>
  );
};

export default ProductRow;
