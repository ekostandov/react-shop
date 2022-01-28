import { keys } from 'lodash';
import PropTypes from 'prop-types';

import products, { getProductsMap } from '../../App/Main/Product/products';

const CartTotal = ({
  productsInCart,
  productMap = getProductsMap(products),
}) => (
  <div>
    Total: $
    {keys(productsInCart).reduce(
      (total, productId) =>
        total + productMap[productId].price * productsInCart[productId],
      0
    )}
  </div>
);

CartTotal.propTypes = {
  productsInCart: PropTypes.object,
  productMap: PropTypes.array,
};

export default CartTotal;
