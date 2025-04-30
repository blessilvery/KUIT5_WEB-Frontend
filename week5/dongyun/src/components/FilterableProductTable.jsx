import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";
import {useState} from "react";

function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);


    return (
        <>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnly={setInStockOnly}/>
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}/>
        </>
    )
}

export default FilterableProductTable