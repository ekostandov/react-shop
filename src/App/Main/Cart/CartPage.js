import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './CartPage.css';

import CartTotal from '../../../Features/Cart/CartTotal';
import CartProductList from '../../../Features/Cart/CartProductList';
import CartProductListItemExtended from '../../../Features/Cart/CartProductListItemExtended';

const CartPage = ({
  productsInCart,
  removeProductFromCart,
  setProductQuantityInCart,
}) => (
  <div className='cart-page'>
    <Link to='/'>
      <img src='./images/icons/close-icon.png' alt='' />
    </Link>
    <h1>Cart Page</h1>
    <CartProductList
      productsInCart={productsInCart}
      ListItemComponent={CartProductListItemExtended}
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
  productsInCart: PropTypes.array,
  // productMap: PropTypes.array,
  removeProductFromCart: PropTypes.func,
  setProductQuantityInCart: PropTypes.func,
};

export default connect(mapStateToProps)(CartPage);
