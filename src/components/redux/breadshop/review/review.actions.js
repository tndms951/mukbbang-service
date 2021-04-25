import breadShopReview from './review.types';

export const setBreadShopReview = (shopReview) => ({
  type: breadShopReview.SET_BREAD_SHOP_REVIEW,
  payload: {
    shopReview
  }
});

export const setShopReviewWriting = (writingReview) => ({
  type: breadShopReview.SET_SHOP_REVIEW_WRITING,
  payload: {
    writingReview
  }
});
