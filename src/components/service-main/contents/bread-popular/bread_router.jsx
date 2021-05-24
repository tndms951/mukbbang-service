import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import breadPoular from './bread_popular';
import breadDetail from './detail/bread_detail';

const BreadRouter = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}/detail/:breadId`} component={breadDetail} />
    <Route exact path={match.path} component={breadPoular} />
  </Switch>
);

BreadRouter.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired
};

export default BreadRouter;
