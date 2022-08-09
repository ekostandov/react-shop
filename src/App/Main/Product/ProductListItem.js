import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link, generatePath } from 'react-router-dom';
import routes from 'constants/routes';

import QuantityInput from 'Component/QuantityInput/QuantityInput';
// import { likeProduct, dislikeProduct } from 'store/like';
// import { addProductToCart } from 'store/cart';

import './ProductListItem.css';

const ProductListItem = props => {
  const { id, name, description, image, type, screenSize, capacity, price } =
    props;
  //const [isLiked, setLike] = useState(useSelector(state => state.productLikes[id]));
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  const isLiked = useSelector(state => state.productLikes[id]);
  const productList = useSelector(state => state.productsInCart);
  console.log(typeof productCount);

  return (
    <div className='product-list-item'>
      <div className='product-image'>
        <img src={image} alt={name} />
      </div>
      <button
        onClick={() => {
          isLiked
            ? dispatch({ type: 'DISLIKE_PRODUCT', id })
            : dispatch({ type: 'LIKE_PRODUCT', id });
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
        onClick={() => {
          console.log(productList);
          dispatch({ type: 'SET_PRODUCT_QUANTITY', id, productCount });
        }}
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

// class ProductListItem extends Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     image: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     screenSize: PropTypes.number,
//     capacity: PropTypes.number,
//     price: PropTypes.number.isRequired,
//     isLiked: PropTypes.bool,
//     likeProduct: PropTypes.func.isRequired,
//     id: PropTypes.number.isRequired,
//     dislikeProduct: PropTypes.func.isRequired,
//     addProductToCart: PropTypes.func.isRequired,
//   };

//   static defaultProps = {
//     isLiked: false,
//     description: 'No description',
//     screenSize: 'No information',
//     capacity: 'No information',
//   };

//   state = {
//     productCount: 1,
//   };

//   onDecrementClick = () => {
//     this.setState(prevState => ({
//       productCount: prevState.productCount - 1,
//     }));
//   };

//   onIncrementClick = () => {
//     this.setState(prevState => ({
//       productCount: prevState.productCount + 1,
//     }));
//   };

//   renderQuantity() {
//     return (
//       <QuantityInput
//         quantity={this.state.productCount}
//         onDecrementClick={this.onDecrementClick}
//         onIncrementClick={this.onIncrementClick}
//         minValue={1}
//         maxValue={9}
//       />
//     );
//   }

//   onLikeClick = () => {
//     const { isLiked, id, likeProduct, dislikeProduct } = this.props;

//     if (isLiked) {
//       dislikeProduct(id);
//     } else {
//       likeProduct(id);
//     }
//   };

//   render() {
//     const {
//       id,
//       name,
//       description,
//       image,
//       type,
//       screenSize,
//       capacity,
//       price,
//       addProductToCart,
//       isLiked,
//     } = this.props;

//     return (
//       <div className='product-list-item'>
//         <div className='product-image'>
//           <img src={image} alt={name} />
//         </div>
//         <button onClick={this.onLikeClick}>
//           {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
//         </button>
//         <h2 className='product-title'>
//           <Link to={generatePath(routes.PRODUCT, { id })}>{name}</Link>
//         </h2>
//         <p className='product-description'>{description}</p>
//         <div className='produt-type'>
//           <span className='product-features'>Type:{type}</span>
//         </div>
//         <div className='product-screen-size'>
//           <span className='product-features'>Screen size:{screenSize}</span>
//         </div>
//         <div className='produt-capacity'>
//           <span className='product-features'>Capacity:{capacity}</span>
//         </div>
//         {this.renderQuantity()}
//         <div className='product-price'>${price}</div>
//         <button
//           className='btn-add-to-cart'
//           onClick={() => addProductToCart(id, this.state.productCount)}
//         >
//           Add to cart
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = () => (state, props) => ({
//   isLiked: state.productLikes[props.id],
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     { likeProduct, dislikeProduct, addProductToCart },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);
