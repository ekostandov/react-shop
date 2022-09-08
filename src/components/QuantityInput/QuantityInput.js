import PropTypes from 'prop-types';

const QuantityInput = ({
  quantity,
  onDecrementClick,
  onIncrementClick,
  minValue = Number.MIN_SAFE_INTEGER,
  maxValue = Number.MAX_SAFE_INTEGER,
}) => (
  <span className='product-quantity'>
    <button onClick={() => onDecrementClick()} disabled={quantity <= minValue}>
      -
    </button>
    <input value={quantity} readOnly />
    <button onClick={() => onIncrementClick()} disabled={quantity > maxValue}>
      +
    </button>
  </span>
);

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  onDecrementClick: PropTypes.func.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

QuantityInput.defaultProps = {
  quantity: 0,
  minValue: 1,
  maxValue: 10,
};

export default QuantityInput;
