import CommunityType from './community.types';

const INITAL_STATE = {
  noticeList: [],
  eventList: []
};

const noticeReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CommunityType.SET_NOTICE_LIST: {
      const { list } = action.payload;
      console.log(list);
      return {
        ...state,
        noticeList: list
      };
    }
    case CommunityType.SET_EVENT_LIST: {
      const { list } = action.payload;
      console.log(list);
      return {
        ...state,
        eventList: list
      };
    }
    case CommunityType.SET_NOTICE_PAGINATION: {
      const { list } = action.payload;
      const newPagination = [...state.noticeList, ...list];
      return {
        ...state,
        noticeList: newPagination
      };
    }
    case CommunityType.SET_EVENT_PAGINATION: {
      const { list } = action.payload;
      const newPagination = [...state.eventList, ...list];
      return {
        ...state,
        eventList: newPagination
      };
    }
    default:
      return state;
  }
};

export default noticeReducer;
