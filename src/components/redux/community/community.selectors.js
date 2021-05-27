import { createSelector } from 'reselect';

const selectNoticeList = (state) => state.community;

export const selectNotice = createSelector([selectNoticeList], (list) => list.noticeList);

export const selectEvent = createSelector([selectNoticeList], (list) => list.eventList);
