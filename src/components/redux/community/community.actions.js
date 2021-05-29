import CommunityType from './community.types';

export const setNoticeList = (list) => ({
  type: CommunityType.SET_NOTICE_LIST,
  payload: {
    list
  }
});

export const setEventList = (list) => ({
  type: CommunityType.SET_EVENT_LIST,
  payload: {
    list
  }
});

export const setNoticePagination = (list) => ({
  type: CommunityType.SET_NOTICE_PAGINATION,
  payload: {
    list
  }
});

export const setEventPagination = (list) => ({
  type: CommunityType.SET_EVENT_PAGINATION,
  payload: {
    list
  }
});
