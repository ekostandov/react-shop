import PropTypes from 'prop-types';

import products, { getProductsMap } from 'pages/Product/products';

const CartTotal = ({ productsInCart, productMap }) => (
  <div>
    Total: $
    {Object.keys(productsInCart).reduce(
      (total, productId) =>
        total + productMap[productId].price * productsInCart[productId],
      0
    )}
  </div>
);

CartTotal.propTypes = {
  productsInCart: PropTypes.object,
  productMap: PropTypes.objectOf(PropTypes.object),
};

CartTotal.defaultProps = {
  productsInCart: {},
  productMap: getProductsMap(products),
};

export default CartTotal;
