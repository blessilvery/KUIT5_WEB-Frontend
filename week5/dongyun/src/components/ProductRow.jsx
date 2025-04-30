
function ProductRow({product, products, setProducts}) {
    const handleEditBtn = ()=>{

    }

    const handleDeleteBtn = ()=>{
        const deleted = products.filter(item => item.name !== product.name)
        setProducts(deleted)
    }

    return (
        <tr>
            <td style={{color: product.stocked ? "red" : "black"}}>
                {product.name}
            </td>
            <td>
                {product.price}
            </td>
            <td>
                <button onClick={(e) => handleEditBtn(e)}>🔧</button>
            </td>
            <td>
                <button onClick={handleDeleteBtn}>❌</button>
            </td>
        </tr>
    )
}

export default ProductRow