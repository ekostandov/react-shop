import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import routes from 'constants/routes';

import QuantityInput from 'Component/QuantityInput/QuantityInput';

import './ProductListItem.css';

class ProductListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    screenSize: PropTypes.number,
    capacity: PropTypes.number,
    price: PropTypes.number.isRequired,
    isLiked: PropTypes.bool,
    dispatchDislike: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    dispatchLike: PropTypes.func.isRequired,
    dispatchAddToCartButton: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLiked: false,
    description: 'No description',
    screenSize: 'No information',
    capacity: 'No information',
  };

  state = {
    productCount: 1,
  };

  onDecrementClick = () => {
    this.setState(prevState => ({
      productCount: prevState.productCount - 1,
    }));
  };

  onIncrementClick = () => {
    this.setState(prevState => ({
      productCount: prevState.productCount + 1,
    }));
  };

  renderQuantity() {
    return (
      <QuantityInput
        quantity={this.state.productCount}
        onDecrementClick={this.onDecrementClick}
        onIncrementClick={this.onIncrementClick}
        minValue={1}
        maxValue={9}
      />
    );
  }

  onLikeClick = () => {
    const { isLiked, id, dispatchDislike, dispatchLike } = this.props;

    if (isLiked) {
      dispatchDislike(id);
    } else {
      dispatchLike(id);
    }
  };

  render() {
    const {
      id,
      name,
      description,
      image,
      type,
      screenSize,
      capacity,
      price,
      dispatchAddToCartButton,
      isLiked,
    } = this.props;

    return (
      <div className='product-list-item'>
        <div className='product-image'>
          <img src={image} alt={name} />
        </div>
        <button onClick={this.onLikeClick}>
          {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
        </button>
        <h2 className='product-title'>
          <Link to={generatePath(routes.PRODUCT, { id })}>{name}</Link>
        </h2>
        <p className='product-description'>{description}</p>
        <div className='produt-type'>
          <span className='product-features'>Type:{type}</span>
        </div>
        <div className='product-screen-size'>
          <span className='product-features'>Screen size:{screenSize}</span>
        </div>
        <div className='produt-capacity'>
          <span className='product-features'>Capacity:{capacity}</span>
        </div>
        {this.renderQuantity()}
        <div className='product-price'>${price}</div>
        <button
          className='btn-add-to-cart'
          onClick={() => dispatchAddToCartButton(id, this.state.productCount)}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => (state, props) => ({
  isLiked: state.productLikes[props.id],
});

const mapDispatchToProps = dispatch => ({
  dispatchLike: id =>
    dispatch({
      type: 'LIKE',
      id,
    }),
  dispatchDislike: id =>
    dispatch({
      type: 'DISLIKE',
      id,
    }),
  dispatchAddToCartButton: (id, count) =>
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      id,
      count,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);
