const LIKE_PRODUCT = 'LIKE_PRODUCT';
const DISLIKE_PRODUCT = 'DISLIKE_PRODUCT';

const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_PRODUCT: {
      return {
        ...state,
        [action.id]: true,
      };
    }

    case DISLIKE_PRODUCT: {
      return {
        ...state,
        [action.id]: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default likeReducer;

export const likeProduct = id => ({
  type: LIKE_PRODUCT,
  id,
});

export const dislikeProduct = id => ({
  type: DISLIKE_PRODUCT,
  id,
});
