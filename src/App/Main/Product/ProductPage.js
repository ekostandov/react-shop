import PropTypes from 'prop-types';

import products, { getProductsMap } from './products';

const ProductPage = ({ productItem = getProductsMap(products), match }) => (
  <div>
    <div>{productItem[match.params.id].name}</div>
  </div>
);

ProductPage.propTypes = {
  productItem: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
