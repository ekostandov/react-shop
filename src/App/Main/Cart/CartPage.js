import React from 'react'
import { Link } from 'react-router-dom'
import products, { getProductsMap } from '../../Main/Product/products'
import CartTotal from '../../../Features/Cart/CartTotal'
import CartProductList from '../../../Features/Cart/CartProductList'
import './CartPage.css'
import CartProductListItemExtended from '../../../Features/Cart/CartProductListItemExtended';
import { connect } from 'react-redux'

const CartPage = ({
    productsInCart,
    productMap= getProductsMap(products),
    removeProductFromCart,
    setProductQuantityInCart,
}) => (
    <div className="cart-page">
        <Link to="/">
            <img src="./images/icons/close-icon.png" alt="" />
        </Link>
        <h1>Cart Page</h1>
        <CartProductList 
            productsInCart={productsInCart}
            ListItemComponent ={CartProductListItemExtended}
            removeProductFromCart={removeProductFromCart}
            setProductQuantityInCart={setProductQuantityInCart}
        />
        <hr />
        <div>
            <CartTotal 
                productsInCart={productsInCart}
            />
        </div>
    </div>
)

const mapStateToProps = () => (
    (state) => {
        return {
            productsInCart: state.productsInCart,
        }
    }
)

export default connect(
    mapStateToProps,
)(CartPage)