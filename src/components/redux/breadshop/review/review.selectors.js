import { createSelector } from 'reselect';

const selectBreadShopReview = (state) => state.breadShop.review;

export const selectShopReview = createSelector([selectBreadShopReview], (breadShop) => breadShop.shopReview);

export const selectWritingReview = createSelector([selectBreadShopReview], (breadShop) => breadShop.writingReview);
