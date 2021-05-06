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

export const setCommentModify = (commentModify, commentId) => {
  console.log(commentModify);
  console.log(commentId);
  return {
    type: breadShopDetailComment.SET_COMMENT_MODIFY,
    payload: {
      commentModify,
      commentId
    }
  };
};

export const setCommentDelete = (commentDelete) => {
  console.log(commentDelete);
  return {
    type: breadShopDetailComment.SET_COMMNET_DELETE,
    payload: {
      commentDelete
    }
  };
};

// 대댓글
export const setReCommentRegister = (reCommentRegister, commenstId) => ({
  type: breadShopDetailComment.SET_RECOMMENT_REGISTER,
  payload: {
    reCommentRegister,
    commenstId
  }
});
