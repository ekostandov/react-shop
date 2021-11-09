import React from 'react'
import './CartProductListItemExtended.css'

import QuantityInput from '../../Component/QuantityInput/QuantityInput'
import { connect } from 'react-redux'

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    setProductQuantityInCart,
    isLiked,
}) => (
    <li>
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span>
                         <QuantityInput 
                            quantity= {productCount}
                            setProductQuantityInCart={setProductQuantityInCart}
                            maxValue={19}
                            onDecrementClick = {()=> { 
                                if (productCount === 1) { 
                                    removeProductFromCart(product.id)
                                } else {
                                    setProductQuantityInCart(product.id,productCount - 1)
                                }
                            }
                            }
                    
                            onIncrementClick = {()=> (
                                setProductQuantityInCart(product.id,productCount + 1)
                            )}
                         /> 
                    </p>
                    <button>
                        {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
                    </button>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                        <button onClick={ () => removeProductFromCart(product.id)}> Delete</button>
                </div>
            </div>
        </div>
    </li>
)

const mapStateToProps = () => (
    (state,props) => {
        return {
            isLiked:state.productLikes[props.product.id],
        }
    }
)

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (id) => dispatch ({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id,
    }),
    setProductQuantityInCart: (id,quantity) => dispatch ({
        type: 'SET_PRODUCT_QUANTITY_IN_CART',
        id,
        quantity,
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CartProductListItemExtended)
