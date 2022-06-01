import { omit } from 'lodash';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const SET_PRODUCT_QUANTITY_IN_CART = 'SET_PRODUCT_QUANTITY_IN_CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

const initialState = {
  2: 4,
  3: 2,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + action.count,
      };
    }

    case SET_PRODUCT_QUANTITY_IN_CART: {
      return {
        ...state,
        [action.id]: action.quantity,
      };
    }

    case REMOVE_PRODUCT_FROM_CART: {
      return omit(state, action.id);
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;

export const addProductToCart = (id, count) => ({
  type: ADD_PRODUCT_TO_CART,
  id,
  count,
});

export const removeProductFromCart = id => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

export const setProductQuantityInCart = (id, quantity) => ({
  type: SET_PRODUCT_QUANTITY_IN_CART,
  id,
  quantity,
});
