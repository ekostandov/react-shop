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

export default CartProductListItem;
