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
    case breadShopReview.SET_SHOP_REVIEW_WRITING: {
      const { writingReview } = action.payload;
      const newReview = [...state.shopReview];
      newReview.unshift(writingReview);

      return {
        ...state,
        shopReview: newReview
      };
    }
    case breadShopReview.SET_SHOP_REVIEW_DELETE: {
      const { reviewDelete } = action.payload;
      const newDelete = [...state.shopReview];
      const updateDelete = newDelete.findIndex((review) => review.id === Number(reviewDelete));
      if (updateDelete !== -1) {
        newDelete.splice(updateDelete, 1);
      }
      return {
        ...state,
        shopReview: newDelete
      };
    }
    case breadShopReview.SET_SHOP_REVIEW_MODIFY: {
      const { reviewModify } = action.payload;
      const newModify = [...state.shopReview];
      const updateModify = newModify.findIndex((modify) => modify.id === Number(reviewModify));
      if (updateModify !== -1) {
        newModify.splice(updateModify, reviewModify);
      }
      return {
        ...state,
        shopReview: newModify
      };
    }
    default:
      return state;
  }
};

export default shopReviewReducer;
