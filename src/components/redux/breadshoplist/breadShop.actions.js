import breadShopTypes from './breadShop.types';

export const setCurrentBreadShop = (breadShop) => ({
  type: breadShopTypes.SET_BREAD_SHOP_List,
  payload: {
    breadShop
  }
});
