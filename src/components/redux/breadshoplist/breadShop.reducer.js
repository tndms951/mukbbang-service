import breadShopTypes from './breadShop.types';

const INITAL_STATE = {
  breadShopList: []
};

const breadShopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopTypes.SET_BREAD_SHOP_LIST: {
      const { breadShop } = action.payload;
      console.log(breadShop);
      return {
        ...state,
        breadShopList: breadShop
      };
    }

    case breadShopTypes.HEART_LIKE_TRUE: {
      const { trueBreadShop } = action.payload;
      const newLike = [...state.breadShopList];
      const updateTrue = newLike.findIndex((like) => like.id === Number(trueBreadShop));
      if (updateTrue > -1) {
        newLike[updateTrue].like = true;
      }
      return {
        ...state,
        breadShopList: newLike
      };
    }
    case breadShopTypes.HEART_LIKE_FALSE: {
      const { falseBreadShop } = action.payload;
      const newFalse = [...state.breadShopList];
      const updateFalse = newFalse.findIndex((disLike) => disLike.id === Number(falseBreadShop));
      if (updateFalse > -1) {
        newFalse[updateFalse].like = false;
      }
      return {
        ...state,
        breadShopList: newFalse
      };
    }
    default:
      return state;
  }
};

export default breadShopReducer;
