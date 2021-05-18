import breadDetailTypes from './breadDetail.types';

// 디테일list
export const setCurrentBreadList = (detailBread) => ({
  type: breadDetailTypes.SET_BREAD_DETAIL_LIST,
  payload: {
    detailBread
  }
});

// 디테일 하트 true
export const setBreadDetailTrue = () => ({
  type: breadDetailTypes.SET_BREAD_DETAIL_TRUE
});

// 디테일 하트 false
export const setBreadDetailFalse = () => ({
  type: breadDetailTypes.SET_BREAD_DETAIL_FALSE
});
