import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import axios, { setAuthorization } from '../../utils/axios';
import { errorhandler } from '../../utils/common';
import { setCurrentUser } from '../redux/user/user.actions';
import { SosalLogin, GoogleWrap, FacebookWrap, KakaoWrap } from '../sign-in/signin_content_style';

// 소셜 로그인
const kakaoToken = process.env.REACT_APP_KAKAO_KEY;
const facebookToken = process.env.REACT_APP_FACEBOOK_KEY;
const googleToken = process.env.REACT_APP_GOOGLE_KEY;

const Social = ({ onUserSet }) => {
  // 카카오
  const onSuccess = async (userData) => {
    try {
      const { access_token: accessToken } = userData.response;
      console.log(accessToken);
      console.log(userData.response);

      const socialObject = {
        token: accessToken,
        type: 'kakao'
      };

      const { data } = await axios.post('/user/social/signup', socialObject);

      // eslint-disable-next-line object-curly-newline
      const {
        data: { token }
        // eslint-disable-next-line object-curly-newline
      } = data;
      console.log(token);
      setAuthorization(token);

      // 서버에서 누구인지 받아오는곳
      const { data: getData } = await axios.get('/user/current');
      console.log(getData);

      console.log(getData.data);
      onUserSet(getData.data, token);
    } catch (err) {
      errorhandler(err);
    }
  };

  // 구글
  const responseGoogle = async (response) => {
    try {
      if (!response.error) {
        const { accessToken: googleAccessToken } = response;
        console.log(googleAccessToken);

        const socialObject = {
          token: googleAccessToken,
          type: 'google'
        };

        const { data } = await axios.post('/user/social/signup', socialObject);

        // eslint-disable-next-line object-curly-newline
        const {
          data: { token }
          // eslint-disable-next-line object-curly-newline
        } = data;
        console.log(token);
        setAuthorization(token);

        // 서버에서 누구인지 받아오는곳
        const { data: getData } = await axios.get('/user/current');
        onUserSet(getData.data, token);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // 페이스북
  const responseFacebook = async (response) => {
    console.log(response);

    try {
      const { accessToken: facebookAccessToken } = response;
      console.log(facebookAccessToken);

      const socialObject = {
        token: facebookAccessToken,
        type: 'facebook'
      };

      const {
        // eslint-disable-next-line object-curly-newline
        data: {
          data: { token }
          // eslint-disable-next-line object-curly-newline
        }
      } = await axios.post('/user/social/signup', socialObject);
      console.log(token);
      setAuthorization(token);

      // 서버에서 누구인지 받아오는곳
      const { data: facebookData } = await axios.get('/user/current');
      onUserSet(facebookData.data, token);
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <SosalLogin className="clearfix">
      <GoogleWrap>
        <GoogleLogin
          clientId={googleToken}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                alt="구글 로그인"
              />
              <span>구글</span>
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </GoogleWrap>

      <FacebookWrap>
        <FacebookLogin
          appId={facebookToken}
          callback={responseFacebook}
          fields="name,email,picture"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} type="button">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/socalfacebook.png"
                alt="페이스북 로그인"
              />
              <span>페이스북</span>
            </button>
          )}
        />
      </FacebookWrap>

      <KakaoWrap>
        <KakaoLogin
          token={kakaoToken}
          onSuccess={onSuccess}
          onFail={console.error}
          onLogout={console.info}
          render={({ onClick }) => (
            <div onClick={onClick} aria-hidden="true" role="button">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/ico_kakaotalk.png"
                alt="카카오톡 로그인"
              />
              <span>카카오톡</span>
            </div>
          )}
        />
      </KakaoWrap>
    </SosalLogin>
  );
};

Social.propTypes = {
  onUserSet: PropTypes.func.isRequired
};

const userToPropsDispatch = (dispatch) => ({
  onUserSet: (user, token) => dispatch(setCurrentUser(user, token))
});

export default connect(null, userToPropsDispatch)(Social);
