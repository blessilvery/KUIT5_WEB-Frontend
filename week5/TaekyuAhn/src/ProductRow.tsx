import React from "react";
import { ProductType } from "./App";

type Props = {
  product: ProductType;
  deleteProduct: (product: ProductType) => void;
};

const ProductRow = ({ product, deleteProduct }: Props) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => deleteProduct(product)}>삭제</button>
      </td>
    </tr>
  );
};

export default ProductRow;
