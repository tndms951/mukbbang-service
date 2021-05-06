import { createSelector } from 'reselect';
// 댓글
const selectDetailComment = (state) => state.breadShop.comment;
export const selectShopComment = createSelector([selectDetailComment], (commentShop) => commentShop.content);

// 대댓글
export const selectShopReComment = createSelector([selectDetailComment], (reComment) => reComment.reCommentList);
