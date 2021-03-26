import breadTypes from './bread.types';

const INITAL_STATE = {
  breadList: []
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

      const newLike = [...state.breadList];

      const updateLike = newLike.findIndex((like) => like.id === Number(trueBreadId));

      if (updateLike > -1) {
        newLike[updateLike].like = true;
      }
      return {
        ...state,
        breadList: newLike
      };
    }

    case breadTypes.HEART_LIKE_FALSE: {
      const { falseBreadId } = action.payload;
      console.log(falseBreadId);
      const newLikeFalse = [...state.breadList];

      const updateFalse = newLikeFalse.findIndex((dislike) => dislike.id === Number(falseBreadId));

      if (updateFalse > -1) {
        newLikeFalse[updateFalse].like = false;
        console.log(newLikeFalse[updateFalse].like);
      }
      return {
        ...state,
        breadList: newLikeFalse
      };
    }
    default:
      return state;
  }
};

export default breadListReducer;
