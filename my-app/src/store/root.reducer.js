import productsLikesReducer from '../Features/Likes/like.reducers'
import cartReducer from '../Features/Cart/cart.reducer'

const rootReducer = (state = {}, action) => {
    return {
        ...state,
        productLikes: productsLikesReducer(state.productLikes, action),
        productsInCart: cartReducer(state.productsInCart, action)
    }
}

export default rootReducer