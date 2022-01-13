import React from 'react'

import products from './products.js'
import ProductListItem from './ProductListItem.js'

const ProductList = ({
    addProductToCart,
}) => (
    <div className="product-list">
        <h1>Product List</h1>
        <div className="row">
            {
                products.map(({
                    id,
                    name,
                    screenSize,
                    type,
                    description,
                    image,
                    capacity,
                    price,
                }) => (
                    <div className="col-lg-6" key={id}>
                        <ProductListItem
                            id={id}
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            screenSize={screenSize}
                            capacity={capacity}
                            price={price}
                            addProductToCart={addProductToCart}
                        />
                    </div>
                ))
            }
        </div>
    </div>
)

export default ProductList