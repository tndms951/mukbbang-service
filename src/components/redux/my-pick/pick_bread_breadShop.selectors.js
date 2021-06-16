import { createSelector } from 'reselect';

const selectPickList = (state) => state.pick;

export const selectPickBreadShop = createSelector([selectPickList], (pick) => pick.pickBreadShopList);

export const selectPickBread = createSelector([selectPickList], (pick) => pick.pickBreadList);
