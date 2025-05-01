import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import InputBar from "./InputBar.js";
import ProductRow from "./ProductRow";

const FilterableProductTable = ({products , setProducts}) => {
    const[filterText,setFilterText] = useState("");
    const [inStockOnly,setInStockOnly] = useState(false);

    const addProduct = (product) => {
        setProducts((prev) => [...prev,product]);
    };

    const handleDeleteProduct = (productToDelete) => {
      setProducts((prev) => prev.filter((p) => p !== productToDelete));
    };

    const handleEditProduct = (productToEdit) => {
      console.log('수정할 상품:', productToEdit);
      // 여기서 InputBar로 값을 보내거나 수정 상태 저장
      <InputBar addProduct ={productToEdit} />
      handleDeleteProduct(productToEdit);
    };

  return (
    <div>
        <SearchBar filterText = {filterText} inStockOnly = {inStockOnly} onFilterTextChange = {setFilterText} onInStockOnlyChange = {setInStockOnly}/>
        <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onDelete={handleDeleteProduct}  // 삭제 처리 함수 전달
        onEdit={handleEditProduct}  // 수정 처리 함수 전달
      />
        <InputBar addProduct = {addProduct}/>

    </div>
  )
}

export default FilterableProductTable