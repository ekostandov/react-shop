const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';

const productsLikesReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE: {
      return {
        ...state,
        [action.id]: true,
      };
    }

    case DISLIKE: {
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

export default productsLikesReducer;

export const likeProduct = id => ({
  type: LIKE,
  id,
});

export const dislikeProduct = id => ({
  type: DISLIKE,
  id,
});
