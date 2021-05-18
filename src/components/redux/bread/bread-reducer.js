import { combineReducers } from 'redux';

import breadList from './list/bread.reducer';
import breadDetail from './detail/breadDetail.reducer';

const breadReducer = combineReducers({
  list: breadList,
  detail: breadDetail
});

export default breadReducer;
