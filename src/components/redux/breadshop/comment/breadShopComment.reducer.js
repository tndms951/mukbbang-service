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
    default:
      return state;
  }
};

export default breadShopCommentReducer;
