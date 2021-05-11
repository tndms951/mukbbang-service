import { createSelector } from 'reselect';

const selectDetailShop = (state) => state.breadShop.detail;

export const selectShopBread = createSelector([selectDetailShop], (detailShop) => detailShop.bread);

export const selectShopImages = createSelector([selectDetailShop], (detailShop) => detailShop.images);

export const selectShopMenuImages = createSelector([selectDetailShop], (detailShop) => detailShop.menuImages);

export const selectShopHolidays = createSelector([selectDetailShop], (detailShop) => detailShop.holidays);

export const selectShopAddress = createSelector([selectDetailShop], (detailShop) => detailShop.address);

export const selectShopInfo = createSelector([selectDetailShop], (detailShop) => detailShop.info);
