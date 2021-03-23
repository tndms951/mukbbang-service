import breadTypes from './bread.types';

const INITAL_STATE = {
  breadList: []
  // heartspace: false
};

const breadListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadTypes.BREAD_LIST_SET: {
      const { bread } = action.payload;
      console.log(bread);
      return {
        ...state,
        breadList: bread
      };
    }
    case breadTypes.HEART_LIKE_TRUE: {
      const { trueBreadId } = action.payload;

      const newLike = [...state.currentList];
      const updateLike = newLike.findIndex((like) => like.id === Number(trueBreadId));
      // console.log(updateLike);

      if (updateLike > -1) {
        newLike[updateLike].like = true;
      }
      return {
        ...state,
        currentList: newLike
      };

      // return {
      //   ...state,
      //   heartspace: trueBreadId
      // };
    }
    case breadTypes.HEART_LIKE_FALSE: {
      const { falseBreadId } = action.payload;

      return {
        ...state,
        heartfull: falseBreadId
      };
    }
    default:
      return state;
  }
};

export default breadListReducer;
