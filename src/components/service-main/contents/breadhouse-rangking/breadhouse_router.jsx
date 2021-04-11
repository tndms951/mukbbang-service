import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShopDetaile from './detaile/breadhouse_detaile';
import HouseRangking from './breadhouse_rangking';

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
