import { createSelector } from 'reselect';

const selectDetailBread = (state) => state.bread.detail;

export const selectBreadImages = createSelector([selectDetailBread], (detailBread) => detailBread.images);

export const selectBreadInfo = createSelector([selectDetailBread], (detailBread) => detailBread.info);
