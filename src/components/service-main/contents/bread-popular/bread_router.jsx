import React from 'react';
import { Route, Switch } from 'react-router-dom';

import breadPoular from './popular_component';
import breadDetail from './detail/bread_detail';

const BreadRouter = () => (
  <Switch>
    <Route path="/rank/bread/detail/:breadId" component={breadDetail} />
    <Route exact path="/rank/bread" component={breadPoular} />
  </Switch>
);

export default BreadRouter;
