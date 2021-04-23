import breadShopDetailComment from './breadShopComment.types';

export const setShopDetailComment = (detailComment) => ({
  type: breadShopDetailComment.SET_SHOP_DETAIL_COMMENT,
  payload: {
    detailComment
  }
});
