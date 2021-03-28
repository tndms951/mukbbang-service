import React, { useLayoutEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Signin from './components/sign-in/signin_content';
import Signup from './components/sign-up/signup_content';
import HouseRangking from './components/service-main/contents/breadShop-rangking/breadShop_rangking';
import populaBread from './components/service-main/contents/popular/popular_component';
import MainHome from './components/service-main/contents/main/mainhome_content';
import PickBread from './components/service-main/contents/youtube-pick/youtube_bread';

import LayOut from './layout';
import axios, { setAuthorization } from './utils/axios';
import { errorhandler } from './utils/common';

import { setCurrentUser } from './components/redux/user/user.actions';

function App({ onUserData }) {
  // console.log(process.env.REACT_APP_GOOGLE_KEY);

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
          <Route path="/rank/bread-house" component={HouseRangking} />
          <Route path="/rank/bread" component={populaBread} />
          <Route path="/youtube-bread" component={PickBread} />
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
