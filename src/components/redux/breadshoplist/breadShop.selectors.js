import { createSelector } from 'reselect';

const selectBreadShop = (state) => state.breadShop;

export const selectShopList = createSelector(
  [selectBreadShop],
  (breadShop) => breadShop.breadShopList
);

export const selectAddress = createSelector(
  [selectBreadShop],
  (breadShop) => breadShop.siAddressList
);
