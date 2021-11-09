import { omit } from 'lodash'

const cartReducer = (state = {
    '2' : 4,
    '3' : 2,
}
    , action) => {
        switch(action.type) {
            case "ADD_PRODUCT_TO_CART": {
                return {
                    ...state,
                    [action.id]:(state[action.id] || 0) + action.count,
                }
            }
            case "SET_PRODUCT_QUANTITY_IN_CART": {
                return {
                    ...state,
                    [action.id]:action.quantity,
                }
            }
            case "REMOVE_PRODUCT_FROM_CART": {
                return omit (state, action.id) // delete id from state
            }
            default : {
                return state
            }
        }
    }

export default cartReducer