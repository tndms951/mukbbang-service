/* eslint-disable react/react-in-jsx-scope */
import breadTypes from './bread.types';

export const setBreadRankingList = (bread) => ({
  type: breadTypes.BREAD_LIST_SET,
  payload: {
    bread
  }
});

export const setBreadListMore = (bread) => ({
  type: breadTypes.BREAD_LIST_MORE,
  payload: {
    bread
  }
});

export const setHeartTrueData = (trueBreadId) => ({
  type: breadTypes.HEART_LIKE_TRUE,
  payload: {
    trueBreadId
  }
});

export const setHeartFalseData = (falseBreadId) => ({
  type: breadTypes.HEART_LIKE_FALSE,
  payload: {
    falseBreadId
  }
});

// 처음 렌더시 그전 값이 보여서 초기화 해줌
export const setBreadReset = () => ({
  type: breadTypes.SET_BREAD_RESET
});
