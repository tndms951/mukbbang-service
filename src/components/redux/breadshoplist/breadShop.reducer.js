import breadShopTypes from './breadShop.types';

const INITAL_STATE = {
  breadShopList: []
};

const breadShopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopTypes.SET_BREAD_SHOP_List: {
      const { breadShop } = action.payload;

      return {
        ...state,
        breadShopList: breadShop
      };
    }
    default:
      return state;
  }
};

export default breadShopReducer;
