import { createSelector } from 'reselect';

const selectDetailComment = (state) => state.comment;

// 댓글
export const selectShopComment = createSelector([selectDetailComment], (breadShopComment) => breadShopComment.content);

// 댓글 pagination
export const selectShopCommentPagnaition = createSelector([selectDetailComment], (breadShopComment) => breadShopComment.pagnation);
