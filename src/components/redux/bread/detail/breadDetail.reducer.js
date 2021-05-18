import breadDetailTypes from './breadDetail.types';

const INITAL_STATE = {
  images: [],
  info: null
};

const breadDetailReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    // 디테일 list
    case breadDetailTypes.SET_BREAD_DETAIL_LIST: {
      const { detailBread } = action.payload;
      const { images, ...info } = detailBread;

      return {
        ...state,
        images,
        info
      };
    }

    // 디테일 하트 true
    case breadDetailTypes.SET_BREAD_DETAIL_TRUE: {
      const newInfo = {
        ...state.info
      };
      console.log(newInfo);
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
