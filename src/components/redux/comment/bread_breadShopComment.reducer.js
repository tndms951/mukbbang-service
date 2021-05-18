import breadShopDetailComment from './bread_breadShopComment.types';

const INITAL_STATE = {
  content: [],
  pagnation: null
};

const breadShopCommentReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    // 댓글 list
    case breadShopDetailComment.SET_SHOP_DETAIL_COMMENT: {
      const { commentList, pagnation } = action.payload;

      return {
        ...state,
        pagnation,
        content: commentList
      };
    }
    // 댓글 pagination
    case breadShopDetailComment.SET_SHOP_DETAIL_COMMENT_MORE: {
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
      newRegister.unshift(registerComment);
      const updatePagination = {
        ...state.pagnation
      };
      updatePagination.totalCount += 1;

      return {
        ...state,
        content: newRegister,
        pagnation: updatePagination
      };
    }

    // 댓글수정
    case breadShopDetailComment.SET_COMMENT_MODIFY: {
      const { commentModify, commentId } = action.payload;
      const newModify = [...state.content];
      const updateModify = newModify.findIndex((modify) => modify.id === Number(commentId));
      if (updateModify !== -1) {
        const updateComment = {
          ...newModify[updateModify],
          content: commentModify
        };
        newModify.splice(updateModify, 1, updateComment);
      }

      return {
        ...state,
        content: newModify
      };
    }
    // 댓글삭제
    case breadShopDetailComment.SET_COMMNET_DELETE: {
      const { commentDelete } = action.payload;
      const newDelete = [...state.content];
      const updateDelete = newDelete.findIndex((comment) => comment.id === Number(commentDelete));
      const updatePagination = {
        ...state.pagnation
      };
      if (updateDelete !== -1) {
        newDelete.splice(updateDelete, 1);
        updatePagination.totalCount -= 1;
      }

      return {
        ...state,
        content: newDelete,
        pagnation: updatePagination
      };
    }

    // 대댓글 등록
    case breadShopDetailComment.SET_RECOMMENT_REGISTER: {
      const { reCommentRegister, commenstId } = action.payload;
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const updateReComment = newReComment.findIndex((list) => list.id === Number(commenstId));
      if (updateReComment !== -1) {
        newReComment[updateReComment].comments.unshift(reCommentRegister);
      }
      return {
        ...state,
        content: newReComment
      };
    }
    // 대댓글 수정
    case breadShopDetailComment.SET_RECOMMENT_MODIFY: {
      const { commentId, reCommentId, modifyForm } = action.payload;
      const newReComment = state.content.map((comment) => ({ ...comment }));
      const findIndexComment = newReComment.findIndex((list) => list.id === Number(commentId));
      if (findIndexComment !== -1) {
        const findIndexReComment = newReComment[findIndexComment].comments.findIndex((list) => list.id === Number(reCommentId));
        if (findIndexReComment !== -1) {
          const newObject = {
            ...newReComment[findIndexComment].comments[findIndexReComment],
            content: modifyForm
          };
          newReComment[findIndexComment].comments.splice(findIndexReComment, 1, newObject);
        }
      }

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
      if (findParentsIndex !== -1) {
        const findChildIndex = newReComment[findParentsIndex].comments.findIndex((list) => list.id === Number(reCommentId));
        newReComment[findParentsIndex].comments.splice(findChildIndex, 1);
      }

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
