import { combineReducers } from 'redux';

import UseReducer from './user/user.reducer';
import breadShopReducer from './breadshoplist/breadShop.reducer';
import breadReducer from './breadlist/bread.reducer';

const rootReducer = combineReducers({
  user: UseReducer,
  breadShop: breadShopReducer,
  bread: breadReducer
});

export default rootReducer;
