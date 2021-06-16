import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import breadShopReducer from './breadshop/bread-shop-reducer';
import breadReducer from './bread/bread-reducer';
import breadBreadShopComment from './comment/bread_breadShopComment.reducer';
import youtubeReducer from './youtube/youtube.reducer';
import communityRouter from './community/community.reducer';
import myPick from './my-pick/pick_bread_breadShop.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  breadShop: breadShopReducer,
  bread: breadReducer,
  youtube: youtubeReducer,
  community: communityRouter,
  comment: breadBreadShopComment,
  pick: myPick
});

export default rootReducer;
