import breadShopReview from './review.types';

const INITAL_STATE = {
  shopReview: []
};

const shopReviewReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopReview.SET_BREAD_SHOP_REVIEW: {
      const { shopReview } = action.payload;
      return {
        ...state,
        shopReview
      };
    }
    default:
      return state;
  }
};

export default shopReviewReducer;
