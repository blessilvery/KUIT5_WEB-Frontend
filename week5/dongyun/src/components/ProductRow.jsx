
function ProductRow({product}) {
    return (
        <tr>
            <td style={{color: product.stocked ? "red" : "black"}}>
                {product.name}
            </td>
            <td>
                {product.price}
            </td>
        </tr>
    )
}

export default ProductRow