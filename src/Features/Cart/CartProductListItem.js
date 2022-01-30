import PropTypes from 'prop-types';

const CartProductListItem = ({ product, productCount }) => (
  <li>
    <span> {product.name} : </span>
    <span> {productCount} : </span>
    <span> {product.price * productCount} </span>
  </li>
);

CartProductListItem.propTypes = {
  product: PropTypes.object,
  productCount: PropTypes.number,
};

CartProductListItem.defaultProps = {
  product: {},
  productCount: 0,
};

export default CartProductListItem;
