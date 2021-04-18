import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import breadShopReducer from './breadshop/bread-shop-reducer';
import breadReducer from './breadlist/bread.reducer';
import eventReducer from './main/main.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  breadShop: breadShopReducer,
  bread: breadReducer,
  event: eventReducer
});

export default rootReducer;
