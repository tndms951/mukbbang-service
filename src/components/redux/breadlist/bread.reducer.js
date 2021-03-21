import breadTypes from './bread.types';

const INITAL_STATE = {
  breadList: [],
  heartspace: false
};

const breadListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadTypes.BREAD_LIST_SET: {
      const { bread } = action.payload;

      return {
        ...state,
        breadList: bread
      };
    }
    case breadTypes.HEART_FILLED: {
      const { filled } = action.payload;

      return {
        ...state,
        heartspace: filled
      };
    }
    default:
      return state;
  }
};

export default breadListReducer;
