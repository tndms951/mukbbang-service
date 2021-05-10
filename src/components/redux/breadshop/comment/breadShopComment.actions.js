import breadShopDetailComment from './breadShopComment.types';

export const setShopDetailComment = (commentList, pagnation) => ({
  type: breadShopDetailComment.SET_SHOP_DETAIL_COMMENT,
  payload: {
    commentList,
    pagnation
  }
});

export const setRegisterComment = (registerComment) => ({
  type: breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER,
  payload: {
    registerComment
  }
});

export const setCommentModify = (commentModify, commentId) => ({
  type: breadShopDetailComment.SET_COMMENT_MODIFY,
  payload: {
    commentModify,
    commentId
  }
});

export const setCommentDelete = (commentDelete) => ({
  type: breadShopDetailComment.SET_COMMNET_DELETE,
  payload: {
    commentDelete
  }
});

// 대댓글
export const setReCommentRegister = (reCommentRegister, commenstId) => ({
  type: breadShopDetailComment.SET_RECOMMENT_REGISTER,
  payload: {
    reCommentRegister,
    commenstId
  }
});

export const setReCommentModify = (commentId, reCommentId, modifyForm) => ({
  type: breadShopDetailComment.SET_RECOMMENT_MODIFY,
  payload: {
    commentId,
    reCommentId,
    modifyForm
  }
});

export const setReCommentDelete = (commentId, reCommentId) => ({
  type: breadShopDetailComment.SET_RECOMMENT_DELETE,
  payload: {
    commentId,
    reCommentId
  }
});
