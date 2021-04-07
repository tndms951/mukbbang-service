import breadShopDetaileTypes from './breadShopDetaile.types';

export const setCurrentBreadShopDetaile = (detaileShop) => ({
  type: breadShopDetaileTypes.SET_BREAD_SHOP_DETAILE_LIST,
  payload: {
    detaileShop
  }
});
