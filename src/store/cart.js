import { omit } from 'lodash';

const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY';
const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

const initialState = {
  2: 4,
  3: 2,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_QUANTITY: {
      const productQuantity = state[action.id]
        ? state[action.id] + action.count
        : action.count;

      return {
        ...state,
        [action.id]: productQuantity,
      };
    }

    case UPDATE_PRODUCT_QUANTITY: {
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
  type: SET_PRODUCT_QUANTITY,
  id,
  count,
});

export const removeProductFromCart = id => ({
  type: REMOVE_PRODUCT_FROM_CART,
  id,
});

export const setProductQuantityInCart = (id, quantity) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  id,
  quantity,
});
