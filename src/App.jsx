import React, { useLayoutEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Signin from './components/sign-in/signin_content';
import Signup from './components/sign-up/signup_content';
import BreadHouseRouter from './components/service-main/contents/breadShop-rangking/breadShop_router';

import BreadRouter from './components/service-main/contents/bread-popular/bread_router';
import MainHome from './components/service-main/contents/main/mainhome_content';
import PickBread from './components/service-main/contents/youtube-pick/youtube_bread';
import Community from './components/service-main/contents/community/community';

import LayOut from './layout';
import axios, { setAuthorization } from './utils/axios';
import { errorhandler } from './utils/common';

import { setCurrentUser } from './components/redux/user/user.actions';

function App({ onUserData }) {
  useLayoutEffect(() => {
    const bringUserToken = localStorage.getItem('userToken');

    async function userTokenData() {
      try {
        setAuthorization(bringUserToken);
        const { status, data } = await axios.get('/user/current');
        if (status === 200) {
          onUserData(data.data, bringUserToken);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    if (bringUserToken) {
      userTokenData();
    }
  }, [onUserData]);

  return (
    <BrowserRouter>
      <LayOut>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/bread-house" component={BreadHouseRouter} />
          <Route path="/bread" component={BreadRouter} />
          <Route path="/youtube-bread" component={PickBread} />
          <Route path="/community" component={Community} />
          <Route path="/" component={MainHome} />
        </Switch>
      </LayOut>
    </BrowserRouter>
  );
}

App.propTypes = {
  onUserData: PropTypes.func.isRequired
};

const userDispathchToProps = (dispatch) => ({
  onUserData: (user, token) => dispatch(setCurrentUser(user, token))
});

export default connect(null, userDispathchToProps)(App);
