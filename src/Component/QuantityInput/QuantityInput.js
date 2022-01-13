import React from 'react'

const QuantityInput = ({
    quantity,
    onDecrementClick,
    onIncrementClick,
    minValue = Number.MIN_SAFE_INTEGER,
    maxValue = Number.MAX_SAFE_INTEGER,
}) => (
    <span className="product-quantity">
        <button 
            onClick={()=> 
                onDecrementClick()}
            disabled={quantity <= minValue}
        >-
        </button>
        <input type="text" value={quantity} readOnly />
        <button 
            onClick={()=> onIncrementClick()}
            disabled={quantity > maxValue}
        >+
        </button>
    </span>
)

export default QuantityInput