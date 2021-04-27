// @ts-nocheck
import breadShopDetailComment from './breadShopComment.types';

const INITAL_STATE = {
  content: []
};

const breadShopCommentReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetailComment.SET_SHOP_DETAIL_COMMENT: {
      const { detailComment } = action.payload;

      return {
        ...state,
        content: detailComment
      };
    }
    case breadShopDetailComment.SET_DETAIL_COMMENT_REGISTER: {
      const { registerComment } = action.payload;
      const newRegister = [...state.content];
      newRegister.unshift(registerComment);
      return {
        ...state,
        content: newRegister
      };
    }

    case breadShopDetailComment.SET_COMMNET_DELETE: {
      const { commentDelete } = action.payload;
      console.log(commentDelete);
      const newDelete = [...state.content];
      console.log(newDelete);
      const updateDelete = newDelete.findIndex((comment) => comment.id === Number(commentDelete));
      const commentA = updateDelete.splice(1);
      console.log(commentA);
      return {
        ...state,
        content: commentA
      };
    }
    default:
      return state;
  }
};

export default breadShopCommentReducer;
