import React, { Dispatch, SetStateAction, useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { ProductType } from "./App";
import InputBar from "./InputBar";

type Props = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
};

const FilterableProductTable = ({ products, setProducts }: Props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (product: ProductType) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (product: ProductType) => {
    setProducts((prev) => prev.filter((item) => item !== product));
  };

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
        deleteProduct={deleteProduct}
      ></ProductTable>
      <InputBar addProduct={addProduct}></InputBar>
    </div>
  );
};

export default FilterableProductTable;
