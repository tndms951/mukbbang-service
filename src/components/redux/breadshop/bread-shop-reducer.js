import { combineReducers } from 'redux';

import breadShopList from './list/breadShop.reducer';
import breadShopDetail from './detail/breadShopDetail.reducer';
import breadShopReview from './review/review.reducer';
import breadShopComment from './comment/breadShopComment.reducer';

const breadShopReducer = combineReducers({
  list: breadShopList,
  detail: breadShopDetail,
  review: breadShopReview,
  comment: breadShopComment
});

export default breadShopReducer;
