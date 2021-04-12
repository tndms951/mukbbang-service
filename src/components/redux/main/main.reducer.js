import eventSwiperTypes from './main.types';

const INITAL_STATE = {
  eventList: []
};

const eventListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case eventSwiperTypes.SET_EVENT_LIST: {
      const { event } = action.payload;
      return {
        ...state,
        eventList: event
      };
    }
    default:
      return state;
  }
};

export default eventListReducer;
