import noticeType from './notice.types';

const INITAL_STATE = {
  noticeList: []
};

const noticeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case noticeType.SET_NOTICE_LIST: {
      const { list } = action.payload;
      console.log(list);
      return {
        ...state,
        noticeList: list
      };
    }
    default:
      return state;
  }
};

export default noticeReducer;
