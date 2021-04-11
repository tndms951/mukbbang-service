import { combineReducers } from 'redux';

import breadShopList from './list/breadShop.reducer';
import breadShopDetail from './detaile/breadShopDetaile.reducer';

const breadShopReducer = combineReducers({
  list: breadShopList,
  detail: breadShopDetail
});

export default breadShopReducer;
