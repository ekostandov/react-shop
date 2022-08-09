import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link, generatePath } from 'react-router-dom';
import routes from 'constants/routes';

import QuantityInput from 'Component/QuantityInput/QuantityInput';
import { likeProduct, dislikeProduct } from 'store/like';
import { addProductToCart } from 'store/cart';

import './ProductListItem.css';

const ProductListItem = props => {
  const { id, name, description, image, type, screenSize, capacity, price } =
    props;
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  const isLiked = useSelector(state => state.productLikes[id]);

  return (
    <div className='product-list-item'>
      <div className='product-image'>
        <img src={image} alt={name} />
      </div>
      <button
        onClick={() => {
          isLiked ? dispatch(likeProduct(id)) : dispatch(dislikeProduct(id));
        }}
      >
        {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
      </button>
      <h2 className='product-title'>
        <Link to={generatePath(routes.PRODUCT, { id })}>{name}</Link>
      </h2>
      <p className='product-description'>{description}</p>
      <div className='produt-type'>
        <span className='product-features'>Type: {type}</span>
      </div>
      <div className='product-screen-size'>
        <span className='product-features'>Screen size: {screenSize}</span>
      </div>
      <div className='produt-capacity'>
        <span className='product-features'>Capacity: {capacity}</span>
      </div>
      <QuantityInput
        quantity={productCount}
        onDecrementClick={() => setProductCount(prevState => prevState - 1)}
        onIncrementClick={() => setProductCount(prevState => prevState + 1)}
        minValue={1}
        maxValue={9}
      />
      <div className='product-price'>${price}</div>
      <button
        className='btn-add-to-cart'
        onClick={() => dispatch(addProductToCart(id, productCount))}
      >
        Add to cart
      </button>
    </div>
  );
};

ProductListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  screenSize: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductListItem;
