import breadShopDetaileTypes from './breadShopDetaile.types';

const INITAL_STATE = {
  detaileList: []
};

const breadShopDetaileReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetaileTypes.SET_BREAD_SHOP_DETAILE_LIST: {
      const { detaileShop } = action.payload;

      return {
        ...state,
        detaileList: detaileShop
      };
    }
    default:
      return state;
  }
};

export default breadShopDetaileReducer;
