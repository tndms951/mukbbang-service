import { createSelector } from 'reselect';

const selectDetailBread = (state) => state.bread.detail;

export const selectBreadInfo = createSelector([selectDetailBread], (detailBread) => detailBread.info);

export const selectBreadImages = createSelector([selectDetailBread], (detailBread) => detailBread.image);
