import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import QuantityInput from '../../../Component/QuantityInput/QuantityInput'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ProductListItem extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string,
        type: PropTypes.string.isRequired,
        screenSize: PropTypes.number,
        capacity: PropTypes.number,
        price: PropTypes.number.isRequired,
    }

    static defaultProps = {
        isLiked:false,
    }

    state = {
        productCount: 1
    }

    onDecrementClick = () => {
        this.setState((prevState)=>({
            productCount: prevState.productCount - 1
        }))
    }

    onIncrementClick = () => {
        this.setState((prevState)=>({
            productCount: prevState.productCount + 1
        }))
    }

    renderQuantity() {
        return (
            <QuantityInput 
                quantity = {this.state.productCount}
                onDecrementClick = {this.onDecrementClick}
                onIncrementClick = {this.onIncrementClick}
                minValue={1}
                maxValue={9}
            />
        )
    }

    onLikeClick = () => {
        if (this.props.isLiked) {
            this.props.dispatchDislike(this.props.id)
        } else {
            this.props.dispatchLike(this.props.id)
        }
    }

    render() {
        const {
            id,
            name,
            description = 'bla bla bla..',
            image,
            type,
            screenSize,
            capacity,
            price,
            dispatchAddToCartButton,
            isLiked,
        } = this.props;
        // == const name = this.props.name;
        return (
            <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt={name}/>
            </div>
            <button onClick={this.onLikeClick}>
                {isLiked ? <span> &#9829; </span> : <span> &#9825; </span>}
            </button>
            <h2 className="product-title"><Link to={`/products/${id}`}>{name}</Link></h2>
            <p className="product-description">{description}</p>
            <div className="produt-type">
                <span className="product-features">Type:{type}</span>
            </div>
            <div className="product-screen-size">
                <span className="product-features">Screen size:{screenSize}</span>
            </div>
            <div className="produt-capacity">
                <span className="product-features">Capacity:{capacity}</span>
            </div>
            { this.renderQuantity() }
            <div className="product-price">${price}</div>
            <button 
                className="btn-add-to-cart"
                onClick={ () => dispatchAddToCartButton(id,this.state.productCount)}
            >Add to cart</button>
        </div>
        )
    }
}

const mapStateToProps = () => (
    (state,props) => {
        return {
            isLiked:state.productLikes[props.id],
        }
    }
)

const mapDispatchToProps = (dispatch) => ({
    dispatchLike: (id) => dispatch({
        type:'LIKE',
        id: id,
    }),
    dispatchDislike: (id) => dispatch({
        type: 'DISLIKE',
        id,
    }),
    dispatchAddToCartButton: (id, count) => dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id,
        count,
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductListItem)



// const ProductListItem = ({
//     // name,
//     // description = 'bla bla bla..',
//     // image,
//     // type,
//     // screenSize,
//     // capacity,
//     // price,
//     }) => (
//         // <div className="product-list-item">
//         //     <div className="product-image">
//         //         <img src={image} alt={name}/>
//         //     </div>
//         //     <h2 className="product-title">{name}</h2>
//         //     <p className="product-description">{description}</p>
//         //     <div className="produt-type">
//         //         <span className="product-features">Type:{type}</span>
//         //     </div>
//         //     <div className="product-screen-size">
//         //         <span className="product-features">Screen size:{screenSize}</span>
//         //     </div>
//         //     <div className="produt-capacity">
//         //         <span className="product-features">Capacity:{capacity}</span>
//         //     </div>
//         //     <div className="product-quantity">
//         //         <button>-</button>
//         //         <input type="text"/>
//         //         <button>+</button>
//         //     </div>
//         //     <div className="product-price">${price}</div>
//         //     <button className="btn-add-to-cart">Add to cart</button>
//         // </div>
// )

// ProductListItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     screenSize: PropTypes.number,
//     capacity: PropTypes.number,
//     price: PropTypes.number.isRequired,
// }

// ProductListItem.defaultProps = {
//     description: ' Bla bla bla...'
// }