import { keys } from 'lodash';
import PropTypes from 'prop-types';

import products, { getProductsMap } from '../../App/Main/Product/products';
import CartProductListItem from './CartProductListItem';

const CartProductList = ({
  productsInCart,
  productMap = getProductsMap(products),
  ListItemComponent = CartProductListItem,
  removeProductFromCart,
  setProductQuantityInCart,
}) => (
  <div className='cart-product-list'>
    <ul>
      {keys(productsInCart).map(productId => (
        <ListItemComponent
          key={productId}
          product={productMap[productId]}
          productCount={productsInCart[productId]}
          removeProductFromCart={removeProductFromCart}
          setProductQuantityInCart={setProductQuantityInCart}
        />
      ))}
    </ul>
  </div>
);

CartProductList.propTypes = {
  productsInCart: PropTypes.number,
  productMap: PropTypes.array,
  ListItemComponent: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  setProductQuantityInCart: PropTypes.func,
};

export default CartProductList;
