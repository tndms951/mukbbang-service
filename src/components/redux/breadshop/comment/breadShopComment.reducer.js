// @ts-nocheck
import breadShopDetailComment from './breadShopComment.types';

const INITAL_STATE = {
  content: []
};

const breadShopCommentReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetailComment.SET_SHOP_DETAIL_COMMENT: {
      const { detailComment } = action.payload;
      console.log(detailComment);
      return {
        ...state,
        content: detailComment
      };
    }
    case breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER: {
      const { registerComment } = action.payload;
      console.log(registerComment);
      const newRegister = [...state.content];
      newRegister.unshift(registerComment);
      console.log(newRegister);
      return {
        ...state,
        content: newRegister
      };
    }

    // 댓글수정
    case breadShopDetailComment.SET_COMMENT_MODIFY: {
      const { commentModify, commentId } = action.payload;
      const newModify = [...state.content];
      const updateModify = newModify.findIndex((modify) => modify.id === Number(commentId));
      const updateComment = {
        ...newModify[updateModify],
        content: commentModify
      };
      newModify.splice(updateModify, 1, updateComment);
      return {
        ...state,
        content: newModify
      };
    }

    case breadShopDetailComment.SET_COMMNET_DELETE: {
      const { commentDelete } = action.payload;
      console.log(commentDelete);
      const newDelete = [...state.content];
      const updateDelete = newDelete.findIndex((comment) => comment.id === Number(commentDelete));
      newDelete.splice(updateDelete, 1);
      return {
        ...state,
        content: newDelete
      };
    }

    // 대댓글 등록
    case breadShopDetailComment.SET_RECOMMENT_REGISTER: {
      const { reCommentRegister, commenstId } = action.payload;
      console.log(reCommentRegister);
      const newReComment = [...state.content];
      const updateReComment = newReComment.findIndex((list) => list.id === commenstId);

      newReComment[updateReComment].comments.unshift(reCommentRegister);
      return {
        ...state,
        content: newReComment
      };
    }
    default:
      return state;
  }
};

export default breadShopCommentReducer;
