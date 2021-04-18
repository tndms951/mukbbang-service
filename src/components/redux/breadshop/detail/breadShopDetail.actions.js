import breadShopDetailTypes from './breadShopDetail.types';

export const setCurrentBreadShopDetail = (detailShop) => ({
  type: breadShopDetailTypes.SET_BREAD_SHOP_DETAIL_LIST,
  payload: {
    detailShop
  }
});

export const setShopDetailTrue = () => ({
  type: breadShopDetailTypes.SET_SHOP_DETAIL_TRUE
});

export const setShopDetailFalse = () => ({
  type: breadShopDetailTypes.SET_SHOP_DETAIL_FALSE
});
