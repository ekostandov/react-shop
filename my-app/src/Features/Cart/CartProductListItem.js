import React from 'react'

const CartProductListItem = ({
    product,
    productCount,
}) => (
    <li>
        <span> {product.name} : </span>
        <span> {productCount} : </span>
        <span> {(product.price * productCount)} </span>
    </li>
)

export default CartProductListItem