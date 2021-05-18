import { createSelector } from 'reselect';

const selectBread = (state) => state.bread.list;

export const selectBreadList = createSelector([selectBread], (bread) => bread.breadList);
