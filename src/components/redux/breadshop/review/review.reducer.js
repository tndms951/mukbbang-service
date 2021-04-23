import breadShopReview from './review.types';

const INITAL_STATE = {
  shopReview: [],
  writingReview: []
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
    // case breadShopReview.SET_SHOP_REVIEW_WRITING: {
    //   const { writingReview } = action.payload;
    //   console.log(writingReview);
    //   return {
    //     ...state,
    //     writingReview
    //   };
    // }
    default:
      return state;
  }
};

export default shopReviewReducer;
