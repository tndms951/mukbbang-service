import breadShopTypes from './breadShop.types';

const INITAL_STATE = {
  breadShopList: [],
  siAddressList: [],
  dongAddressList: []
};

const breadShopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopTypes.SET_BREAD_SHOP_LIST: {
      const { breadShop } = action.payload;

      return {
        ...state,
        breadShopList: breadShop
      };
    }

    case breadShopTypes.HEART_LIKE_TRUE: {
      const { trueBreadShop } = action.payload;
      const newLike = [...state.breadShopList];
      const updateTrue = newLike.findIndex((like) => like.id === Number(trueBreadShop));
      console.log(updateTrue);
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
    case breadShopTypes.SET_ADDRESS_SI: {
      const { siAddress } = action.payload;

      return {
        ...state,
        siAddressList: siAddress
      };
    }
    case breadShopTypes.SET_ADDRESS_DONG: {
      const { dongAddress } = action.payload;

      return {
        ...state,
        dongAddressList: dongAddress
      };
    }
    default:
      return state;
  }
};

export default breadShopReducer;
