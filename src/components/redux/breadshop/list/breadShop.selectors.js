import { createSelector } from 'reselect';

const selectBreadShop = (state) => state.breadShop.list;

export const selectShopList = createSelector([selectBreadShop], (breadShop) => breadShop.breadShopList);

export const selectAddress = createSelector([selectBreadShop], (breadShop) => breadShop.siAddressList);

export const selectdongAddress = createSelector([selectBreadShop], (breadShop) => breadShop.dongAddressList);
