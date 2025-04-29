import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { ProductType } from "./App";

type Props = {
  products: ProductType[];
};

const FilterableProductTable = ({ products }: Props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={inStockOnly}
      ></ProductTable>
    </div>
  );
};

export default FilterableProductTable;
