import noticeType from './notice.types';

export const setNoticeList = (list) => ({
  type: noticeType.SET_NOTICE_LIST,
  payload: {
    list
  }
});
