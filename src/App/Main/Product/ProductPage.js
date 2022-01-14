import React from 'react'
import products, { getProductsMap } from './products'

const ProductPage = ({
    productItem = getProductsMap(products),
    match,
}) => (
    <div>
        {productItem[match.params.productId].name}
    </div>
)

export default ProductPage