import { createSelector } from 'reselect';

const selectBreadShop = (state) => state.breadShop.list;

export const selectShopList = createSelector(
  [selectBreadShop],
  (breadShop) => breadShop.breadShopList
);
