import { createSelector } from 'reselect';

const selectCommunityList = (state) => state.community;

export const selectNotice = createSelector([selectCommunityList], (list) => list.noticeList);

export const selectEvent = createSelector([selectCommunityList], (list) => list.eventList);
