import breadShopDetaileTypes from './breadShopDetaile.types';

const INITAL_STATE = {
  detaileList: [],
  bread: [],
  images: [],
  menuImages: [],
  holidays: [],
  address: null,
  info: null
};

const breadShopDetaileReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetaileTypes.SET_BREAD_SHOP_DETAILE_LIST: {
      const { detaileShop } = action.payload;
      const { bread, images, menuImages, holidays, address, ...info } = detaileShop;
      return {
        ...state,
        detaileList: detaileShop,
        bread,
        info
      };
    }
    default:
      return state;
  }
};

export default breadShopDetaileReducer;
