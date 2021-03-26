import breadShopTypes from './breadShop.types';

export const setCurrentBreadShop = (breadShop) => ({
  type: breadShopTypes.SET_BREAD_SHOP_LIST,
  payload: {
    breadShop
  }
});

export const setShopTrueData = (trueBreadShop) => ({
  type: breadShopTypes.HEART_LIKE_TRUE,
  payload: {
    trueBreadShop
  }
});

export const setShopFalseData = (falseBreadShop) => ({
  type: breadShopTypes.HEART_LIKE_FALSE,
  payload: {
    falseBreadShop
  }
});
