import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import breadShopReducer from './breadshop/bread-shop-reducer';
import breadReducer from './bread/bread-reducer';
import eventReducer from './main/main.reducer';
import breadBreadShopComment from './comment/bread_breadShopComment.reducer';
import youtubeReducer from './youtube/youtube.reducer';
import CommunityRouter from './community/community.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  breadShop: breadShopReducer,
  bread: breadReducer,
  event: eventReducer,
  comment: breadBreadShopComment,
  youtube: youtubeReducer,
  community: CommunityRouter
});

export default rootReducer;
