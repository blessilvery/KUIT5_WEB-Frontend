import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    const newProductPD = newProduct.price.startsWith("$")
      ? newProduct.price
      : `$${newProduct.price}`;

    const newProductD = {
      ...newProduct,
      price: newProductPD,
    };

    setProducts((previousData) => {
      const updated = [...previousData, newProductD];
      updated.sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });

      return updated;
    });
  };

  const categories = [...new Set(products.map((p) => p.category))];

  const handleDeleteProduct = (nameToDelete) => {
    setProducts((prev) => prev.filter((p) => p.name !== nameToDelete));
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onDelete={handleDeleteProduct}
      />
      <InputBar addProduct={addProduct} categories={categories} />;
    </div>
  );
};

export default FilterableProductTable;
