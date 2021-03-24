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
      console.log(trueBreadId);
      const newLike = [...state.breadList];
      console.log(newLike);
      // console.log(newLike[3].title);
      const updateLike = newLike.findIndex((like) => like.id === Number(trueBreadId));
      console.log(updateLike);
      if (updateLike > -1) {
        newLike[updateLike].like = true;
      }
      return {
        ...state,
        breadList: newLike
      };

      // return {
      //   ...state,
      //   heartspace: trueBreadId
      // };
    }
    // case breadTypes.HEART_LIKE_FALSE: {
    //   const { falseBreadId } = action.payload;

    //   return {
    //     ...state,
    //     heartfull: falseBreadId
    //   };
    // }
    default:
      return state;
  }
};

export default breadListReducer;
