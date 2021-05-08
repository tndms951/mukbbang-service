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
      console.log(commenstId);
      const newReComment = state.content.map((comment) => ({ ...comment }));
      console.log(state.content);
      const updateReComment = newReComment.findIndex((list) => list.id === Number(commenstId));
      console.log(updateReComment);
      newReComment[updateReComment].comments.unshift(reCommentRegister);
      return {
        ...state,
        content: newReComment
      };
    }
    // case breadShopDetailComment.SET_RECOMMENT_MODIFY: {
    //   const { commentId } = action.payload;
    //   console.log(commentId); // 대댓글id
    //   const newModify = [...state.content];
    //   console.log(newModify);

    //   const updateModify
    //   const updateModify = newModify.findIndex((list) => list.id === Number(commentId));
    //   console.log(newModify[updateModify]);
    //   console.log(updateModify);
    //   const newDate = {
    //     ...newModify[updateModify],
    //     content: newModify
    //   };
    //   newModify[updateModify].comments.splice(updateModify, 1, newDate);
    //   console.log(updateModify);

    //   return {
    //     ...state,
    //     content: newModify
    //   };
    // }
    case breadShopDetailComment.SET_RECOMMENT_MODIFY: {
      const { commentId, reCommentId, modifyForm } = action.payload;
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const findIndexComment = newReComment.findIndex((list) => list.id === Number(commentId));
      const findIndexReComment = newReComment[findIndexComment].comments.findIndex((list) => list.id === Number(reCommentId));
      const newObject = {
        ...newReComment[findIndexReComment],
        content: modifyForm
      };
      newReComment[findIndexComment].comments.splice(findIndexComment, 1, newObject);
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default breadShopCommentReducer;
