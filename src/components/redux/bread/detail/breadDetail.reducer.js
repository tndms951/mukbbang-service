import breadDetailTypes from './breadDetail.types';

const INITAL_STATE = {
  image: [],
  info: null
};

const breadDetailReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    // 디테일 list
    case breadDetailTypes.SET_BREAD_DETAIL_LIST: {
      const { detailBread } = action.payload;
      const { image, ...info } = detailBread;
      return {
        ...state,
        image,
        info
      };
    }

    // 디테일 하트 true
    case breadDetailTypes.SET_BREAD_DETAIL_TRUE: {
      const newInfo = {
        ...state.info
      };
      newInfo.like = true;
      return {
        ...state,
        info: newInfo
      };
    }
    // 디테일 하트 false
    case breadDetailTypes.SET_BREAD_DETAIL_FALSE: {
      const newInfo = {
        ...state.info
      };
      newInfo.like = false;
      return {
        ...state,
        info: newInfo
      };
    }
    default:
      return state;
  }
};

export default breadDetailReducer;
