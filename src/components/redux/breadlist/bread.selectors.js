import { createSelector } from 'reselect';

const selectBread = (state) => state.bread;

export const selectBreadList = createSelector([selectBread], (bread) => bread.breadList);
