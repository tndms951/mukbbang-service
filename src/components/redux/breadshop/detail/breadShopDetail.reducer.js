import breadShopDetailTypes from './breadShopDetail.types';

const INITAL_STATE = {
  bread: [],
  images: [],
  menuImages: [],
  holidays: [],
  address: null,
  info: null
};

const breadShopDetailReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case breadShopDetailTypes.SET_BREAD_SHOP_DETAIL_LIST: {
      const { detailShop } = action.payload;
      console.log(detailShop);
      const { bread, images, menuImages, holidays, address, ...info } = detailShop;

      return {
        ...state,
        bread,
        images,
        menuImages,
        holidays,
        address,
        info
      };
    }
    case breadShopDetailTypes.SET_SHOP_DETAIL_TRUE: {
      const newInfo = {
        ...state.info
      };
      newInfo.like = true;
      return {
        ...state,
        info: newInfo
      };
    }
    case breadShopDetailTypes.SET_SHOP_DETAIL_FALSE: {
      const newInfo = {
        ...state.info
      };
      newInfo.like = false;
      console.log(newInfo);
      return {
        ...state,
        info: newInfo
      };
    }

    default:
      return state;
  }
};

export default breadShopDetailReducer;
