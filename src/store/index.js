import { createStore, combineReducers } from 'redux';

import likeReducer from 'store/like';
import cartReducer from 'store/cart';

const rootReducer = combineReducers({
  productLikes: likeReducer,
  productsInCart: cartReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
