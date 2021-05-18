import breadShopDetailComment from './bread_breadShopComment.types';

// 댓글list
export const setShopDetailComment = (commentList, pagnation) => ({
  type: breadShopDetailComment.SET_SHOP_DETAIL_COMMENT,
  payload: {
    commentList,
    pagnation
  }
});
// 댓글 pagination
export const setShopDetailCommentMore = (commentList, pagnation) => ({
  type: breadShopDetailComment.SET_SHOP_DETAIL_COMMENT_MORE,
  payload: {
    commentList,
    pagnation
  }
});
// 댓글등록
export const setRegisterComment = (registerComment) => ({
  type: breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER,
  payload: {
    registerComment
  }
});
// 댓글수정
export const setCommentModify = (commentModify, commentId) => ({
  type: breadShopDetailComment.SET_COMMENT_MODIFY,
  payload: {
    commentModify,
    commentId
  }
});
// 댓글삭제
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
// 대댓글 수정
export const setReCommentModify = (commentId, reCommentId, modifyForm) => ({
  type: breadShopDetailComment.SET_RECOMMENT_MODIFY,
  payload: {
    commentId,
    reCommentId,
    modifyForm
  }
});
// 대댓글 삭제
export const setReCommentDelete = (commentId, reCommentId) => ({
  type: breadShopDetailComment.SET_RECOMMENT_DELETE,
  payload: {
    commentId,
    reCommentId
  }
});
