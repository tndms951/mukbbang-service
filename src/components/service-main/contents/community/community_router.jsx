import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Notice from './notice';

const CommunityRouter = () => (
  <Switch>
    <Route path="/community" component={Notice} />
  </Switch>
);

export default CommunityRouter;
