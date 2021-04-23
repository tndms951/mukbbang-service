import { createSelector } from 'reselect';

const selectDetailComment = (state) => state.breadShop.comment;

export const selectShopComment = createSelector([selectDetailComment], (commentShop) => commentShop.content);
