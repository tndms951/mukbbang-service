import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShopDetaile from './detail/breadShop_detail';
import HouseRangking from './breadShop_rangking';

const BreadHouseRouter = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/detail/:breadShopId`} component={ShopDetaile} />
    <Route exact path={match.path} component={HouseRangking} />
  </Switch>
);

BreadHouseRouter.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired
};
export default BreadHouseRouter;
