import React from "react";
import { ProductType } from "./App";

type Props = {
  product: ProductType;
};

const ProductRow = ({ product }: Props) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
