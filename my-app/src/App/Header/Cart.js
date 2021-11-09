import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import "./Cart.css"

import products, { getProductsMap } from '../Main/Product/products'
import CartTotal from '../../Features/Cart/CartTotal'
import CartProductList from '../../Features/Cart/CartProductList'

const Cart = ({
    productsInCart,
    productMap = getProductsMap(products),
}) => (
        <div className="cart text-center">
            <CartProductList 
                productsInCart={productsInCart}
            />
            <CartTotal 
                productsInCart={productsInCart}
            />
            <Link to="/cart">show cart</Link>
        </div>
)

Cart.propTypes = {
    productsInCart:PropTypes.object.isRequired,
}

const mapStateToProps = () => (
    (state) => {
        return {
            productsInCart: state.productsInCart,
        }
    }
)

export default connect(
    mapStateToProps,
)(Cart)