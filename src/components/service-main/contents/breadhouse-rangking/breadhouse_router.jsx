import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopDetaile from './detaile/breadhouse_detaile';
import HouseRangking from './breadhouse_rangking';

const BreadHouseRouter = () => (
  // console.log(match);
  // eslint-disable-next-line react/jsx-indent
  <Switch>
    <Route path="/rank/bread-house/detaile" component={ShopDetaile} />
    <Route exact path="/rank/bread-house" component={HouseRangking} />
  </Switch>
);
export default BreadHouseRouter;
