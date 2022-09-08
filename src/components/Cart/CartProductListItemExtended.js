import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import QuantityInput from 'components/QuantityInput/QuantityInput';
import {
  addProductToCart,
  setProductQuantityInCart,
  removeProductFromCart,
} from 'store/cart';

import './CartProductListItemExtended.css';

const CartProductListItemExtended = ({
  product,
  productCount,
  removeProductFromCart,
  setProductQuantityInCart,
  isLiked,
}) => (
  <li>
    <div className='cart-product-list-item-description'>
      <div className='row'>
        <div className='col-lg-3'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='col-lg-9'>
          <p className='cart-extended-name'>
            <span> {product.name} </span>
          </p>
          <p className='cart-extended-price'>
            Price for one item: <span className='bold'>$ {product.price} </span>
          </p>
          <p className='cart-extended-count'>
            Selected quantity: <span className='bold'> {productCount} </span>
            <QuantityInput
              quantity={productCount}
              setProductQuantityInCart={setProductQuantityInCart}
              maxValue={19}
              onDecrementClick={() => {
                if (productCount === 1) {
                  removeProductFromCart(product.id);
                } else {
                  setProductQuantityInCart(product.id, productCount - 1);
                }
              }}
              onIncrementClick={() =>
                setProductQuantityInCart(product.id, productCount + 1)
              }
            />
          </p>
          <button>
            {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
          </button>
          <p className='cart-extended-sum'>
            Sum for this item:{' '}
            <span className='bold sum-price'>
              $ {product.price * productCount}{' '}
            </span>
          </p>
          <button onClick={() => removeProductFromCart(product.id)}>
            {' '}
            Delete
          </button>
        </div>
      </div>
    </div>
  </li>
);

const mapStateToProps = () => (state, props) => ({
  isLiked: state.productLikes[props.product.id],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addProductToCart, setProductQuantityInCart, removeProductFromCart },
    dispatch
  );

CartProductListItemExtended.propTypes = {
  product: PropTypes.object,
  productCount: PropTypes.number,
  isLiked: PropTypes.boolean,
  removeProductFromCart: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  setProductQuantityInCart: PropTypes.func.isRequired,
};

CartProductListItemExtended.defaultProps = {
  product: {},
  productCount: 0,
  isLiked: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartProductListItemExtended);
