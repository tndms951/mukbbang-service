import breadTypes from './bread.types';

const INITAL_STATE = {
  breadList: [],
  heartspace: false
};

const breadListReducer = (state = INITAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case breadTypes.BREAD_LIST_SET: {
      const { bread } = action.payload;
      console.log(bread);
      console.log('뭐다냐?');
      return {
        ...state,
        breadList: bread
      };
    }
    case breadTypes.HEART_FILLED: {
      const { filled } = action.payload;
      console.log(filled);
      console.log('어이고');

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
