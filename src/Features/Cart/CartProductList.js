import PropTypes from 'prop-types';

import products, { getProductsMap } from '../../App/Main/Product/products';
import CartProductListItem from './CartProductListItem';

const CartProductList = ({
  productsInCart,
  productMap,
  removeProductFromCart,
  setProductQuantityInCart,
}) => (
  <div className='cart-product-list'>
    <ul>
      {Object.keys(productsInCart).map(productId => (
        <CartProductListItem
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
  productsInCart: PropTypes.object,
  productMap: PropTypes.objectOf(PropTypes.object),
  removeProductFromCart: PropTypes.func,
  setProductQuantityInCart: PropTypes.func,
};

CartProductList.defaultProps = {
  removeProductFromCart: null,
  setProductQuantityInCart: null,
  productsInCart: {},
  productMap: getProductsMap(products),
};

export default CartProductList;
