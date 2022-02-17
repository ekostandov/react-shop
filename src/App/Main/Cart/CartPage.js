import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartTotal from 'Features/Cart/CartTotal';
import CartProductList from 'Features/Cart/CartProductList';
import routes from 'constants/routes';

import './CartPage.css';

const CartPage = ({
  productsInCart,
  removeProductFromCart,
  setProductQuantityInCart,
}) => (
  <div className='cart-page'>
    <Link to={routes.HOME}>
      <img src='./images/icons/close-icon.png' alt='' />
    </Link>
    <h1>Cart Page</h1>
    <CartProductList
      productsInCart={productsInCart}
      removeProductFromCart={removeProductFromCart}
      setProductQuantityInCart={setProductQuantityInCart}
    />
    <hr />
    <div>
      <CartTotal productsInCart={productsInCart} />
    </div>
  </div>
);

const mapStateToProps = () => state => ({
  productsInCart: state.productsInCart,
});

CartPage.propTypes = {
  productsInCart: PropTypes.object,
  removeProductFromCart: PropTypes.func,
  setProductQuantityInCart: PropTypes.func,
};

CartPage.defaultProps = {
  productsInCart: {},
  removeProductFromCart: null,
  setProductQuantityInCart: null,
};

export default connect(mapStateToProps)(CartPage);
