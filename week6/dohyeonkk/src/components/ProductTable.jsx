import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


const ProductTable = ({ products, deleteProduct, editProduct }) => {


    const productbyCategory = products.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || [];
        acc[product.category].push(product);
        return acc;
    }, {});


    return (
        <div>
            {Object.keys(productbyCategory).map((category) => (
                <div key={category}>
                    <h3>{category}</h3>
                    <table>
                        <tbody>
                            {productbyCategory[category].map((product) => (
                                <ProductRow deleteProduct={deleteProduct} editProduct={editProduct} key={product.name} product={product} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );


    // const rows = [];
    // let lastCategory = null;


    // products
    //     .sort((a, b) => {
    //         if (a.category < b.category) return -1;
    //         if (a.category > b.category) return 1;
    //         return 0;
    //     })
    //     .map((product) => {
    //         if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
    //             return;
    //         }

    //         if (inStockOnly && !product.stocked) {
    //             return;
    //         }


    //         if (product.category !== lastCategory) {
    //             rows.push(
    //                 <ProductCategoryRow
    //                     category={product.category}
    //                     key={product.category} />
    //             );

    //         }

    //         rows.push(<ProductRow product={product} deleteProduct={deleteProduct} editProduct={editProduct} key={product.name} />);
    //         lastCategory = product.category;
    //     });




    // return (
    //     <form>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Price</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {rows}
    //             </tbody>
    //         </table>
    //     </form>
    // );
};

export default ProductTable;