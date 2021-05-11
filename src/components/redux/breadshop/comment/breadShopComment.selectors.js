import { createSelector } from 'reselect';
// 댓글
const selectDetailComment = (state) => state.breadShop.comment;
export const selectShopComment = createSelector([selectDetailComment], (breadShopComment) => breadShopComment.content);

// 댓글 pagination
export const selectShopCommentPagnaition = createSelector([selectDetailComment], (breadShopComment) => breadShopComment.pagnation);
