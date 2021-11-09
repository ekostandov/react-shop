import React from 'react'
import { keys } from 'lodash'
import products, { getProductsMap } from '../../App/Main/Product/products'

const CartTotal = ({
    productsInCart,
    productMap = getProductsMap(products),
}) => (
    <div>
        Total: $
        {
            keys(productsInCart).reduce((total,productId) => {
                return total + (productMap[productId].price * productsInCart[productId])
            },0)
        }
    </div>
)

export default CartTotal