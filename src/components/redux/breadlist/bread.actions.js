import breadTypes from './bread.types';

export const setBreadRankingList = (bread) => ({
  type: breadTypes.BREAD_LIST_SET,
  payload: {
    bread
  }
});

export const setHeartTrueData = (filled, heartId) => ({
  type: breadTypes.HEART_FILLED,
  payload: {
    filled,
    heartId
  }
});
