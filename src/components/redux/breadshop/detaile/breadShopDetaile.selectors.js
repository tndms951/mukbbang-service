import { createSelector } from 'reselect';

const selectDetaileShop = (state) => state.detaileShop;

export const selectShopListDetaile = createSelector(
  [selectDetaileShop],
  (detaileShop) => detaileShop.detaileList
);
