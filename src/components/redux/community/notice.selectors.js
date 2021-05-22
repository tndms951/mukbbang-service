import { createSelector } from 'reselect';

const selectNoticeList = (state) => state.community;

export const selectCommunity = createSelector([selectNoticeList], (list) => list.noticeList);
