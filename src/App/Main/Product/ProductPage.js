import PropTypes from 'prop-types';

import products, { getProductsMap } from './products';

const ProductPage = ({ productItem = getProductsMap(products), match }) => (
  <div>{productItem[match.params.productId].name}</div>
);

ProductPage.propTypes = {
  productItem: PropTypes.array,
  match: PropTypes.object,
};

export default ProductPage;
