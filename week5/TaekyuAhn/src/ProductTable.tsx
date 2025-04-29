import React, { JSX } from "react";
import { ProductType } from "./App";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
  products: ProductType[];
  filterText: string;
  isStockOnly: boolean;
};

const ProductTable = ({ isStockOnly, filterText, products }: Props) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string = "";

  products.map((product, index) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (isStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>
      );
    }
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
