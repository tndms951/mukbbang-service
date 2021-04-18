import breadShopReview from './review.types';

export const setBreadShopReview = (shopReview) => ({
  type: breadShopReview.SET_BREAD_SHOP_REVIEW,
  payload: {
    shopReview
  }
});
