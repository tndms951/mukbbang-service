import PickListTypes from './pick_bread_breadShop.types';

const INITAL_STATE = {
  pickBreadShopList: [],
  pickBreadList: []
};

const pickListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case PickListTypes.SET_BREADSHOP_LIST: {
      const { event } = action.payload;
      console.log(event);
      return {
        ...state,
        pickBreadShopList: event
      };
    }
    case PickListTypes.SET_BREAD_LIST: {
      const { event } = action.payload;
      return {
        ...state,
        pickBreadList: event
      };
    }
    default:
      return state;
  }
};

export default pickListReducer;
