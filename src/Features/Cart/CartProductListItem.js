import PropTypes from 'prop-types';

const CartProductListItem = ({ product, productCount }) => (
  <li>
    <span> {product.name} : </span>
    <span> {productCount} : </span>
    <span> {product.price * productCount} </span>
  </li>
);

CartProductListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  productCount: PropTypes.number.isRequired,
};

// CartProductListItem.defaultProps = {
//   productCount: 0,
// };

export default CartProductListItem;
