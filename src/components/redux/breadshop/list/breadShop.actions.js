import breadShopTypes from './breadShop.types';

export const setCurrentBreadShop = (breadShop) => ({
  type: breadShopTypes.SET_BREAD_SHOP_LIST,
  payload: {
    breadShop
  }
});

export const setCurrentBreadShopMore = (breadShop) => ({
  type: breadShopTypes.SET_BREAD_SHOP_LIST_MORE,
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

export const setSiAddressData = (siAddress) => ({
  type: breadShopTypes.SET_ADDRESS_SI,
  payload: {
    siAddress
  }
});

export const setDongAddressData = (dongAddress) => ({
  type: breadShopTypes.SET_ADDRESS_DONG,
  payload: {
    dongAddress
  }
});
