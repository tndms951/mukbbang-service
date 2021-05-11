import breadShopDetailTypes from './breadShopDetail.types';

// 디테일list
export const setCurrentBreadShopDetail = (detailShop) => ({
  type: breadShopDetailTypes.SET_BREAD_SHOP_DETAIL_LIST,
  payload: {
    detailShop
  }
});
// 디테일 하트 true
export const setShopDetailTrue = () => ({
  type: breadShopDetailTypes.SET_SHOP_DETAIL_TRUE
});

// 디테일 하트 false
export const setShopDetailFalse = () => ({
  type: breadShopDetailTypes.SET_SHOP_DETAIL_FALSE
});
