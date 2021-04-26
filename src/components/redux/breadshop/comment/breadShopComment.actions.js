import breadShopDetailComment from './breadShopComment.types';

export const setShopDetailComment = (detailComment) => ({
  type: breadShopDetailComment.SET_SHOP_DETAIL_COMMENT,
  payload: {
    detailComment
  }
});

export const setRegisterComment = (registerComment) => ({
  type: breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER,
  payload: {
    registerComment
  }
});
