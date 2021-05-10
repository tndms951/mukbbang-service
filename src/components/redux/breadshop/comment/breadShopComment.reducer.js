// @ts-nocheck
import breadShopDetailComment from './breadShopComment.types';

const INITAL_STATE = {
  content: [],
  pagnation: null
};

const breadShopCommentReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetailComment.SET_SHOP_DETAIL_COMMENT: {
      const { commentList, pagnation } = action.payload;
      const newList = [...state.content, ...commentList];

      return {
        ...state,
        pagnation,
        content: newList
      };
    }
    // 댓글저장
    case breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER: {
      const { registerComment } = action.payload;
      const newRegister = [...state.content];
      const updateComment = newRegister.unshift(registerComment);
      return {
        ...state,
        content: updateComment
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
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const updateReComment = newReComment.findIndex((list) => list.id === Number(commenstId));
      newReComment[updateReComment].comments.unshift(reCommentRegister);
      return {
        ...state,
        content: newReComment
      };
    }
    // 대댓글 수정
    case breadShopDetailComment.SET_RECOMMENT_MODIFY: {
      // eslint-disable-next-line no-unused-vars
      const { commentId, reCommentId, modifyForm } = action.payload;
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const findIndexComment = newReComment.findIndex((list) => list.id === Number(commentId));
      const findIndexReComment = newReComment[findIndexComment].comments.findIndex((list) => list.id === Number(reCommentId));
      const newObject = {
        ...newReComment[findIndexComment].comments[findIndexReComment],
        content: modifyForm
      };
      newReComment[findIndexComment].comments.splice(findIndexReComment, 1, newObject);
      return {
        ...state,
        content: newReComment
      };
    }

    // 대댓글 삭제
    case breadShopDetailComment.SET_RECOMMENT_DELETE: {
      const { commentId, reCommentId } = action.payload;
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const findParentsIndex = newReComment.findIndex((list) => list.id === Number(commentId));
      const findChildIndex = newReComment[findParentsIndex].comments.findIndex((list) => list.id === Number(reCommentId));
      newReComment[findParentsIndex].comments.splice(findChildIndex, 1);

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
