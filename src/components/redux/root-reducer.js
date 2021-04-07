import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import breadShopReducer from './breadshoplist/breadShop.reducer';
import breadReducer from './breadlist/bread.reducer';
import breadShopDetaileReducer from './breadshoplist/detaile/breadShopDetaile.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  breadShop: breadShopReducer,
  bread: breadReducer,
  detaileShop: breadShopDetaileReducer
});

export default rootReducer;
