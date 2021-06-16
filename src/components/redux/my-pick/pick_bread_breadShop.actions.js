import PickListTypes from './pick_bread_breadShop.types';

export const setPickBreadShopList = (event) => ({
  type: PickListTypes.SET_BREADSHOP_LIST,
  payload: {
    event
  }
});

export const setPickBread = (event) => ({
  type: PickListTypes.SET_BREAD_LIST,
  payload: {
    event
  }
});
