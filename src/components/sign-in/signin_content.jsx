import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';
import { Link } from 'react-router-dom';

import { setCurrentUser } from '../redux/user/user.actions';
import { sweetAlert, isEmailValid, errorhandler } from '../../utils/common';
import axios, { setAuthorization } from '../../utils/axios';

import { SigninAllWrap, InputEmail, InputPassword, LoginButton, SigninLine } from './signin_content_style';
import Social from '../common-component/social';

function Signin({ onUserSet, history, location }) {
  console.log(location);
  console.log(location);
  const [LoginValue, setLoginValue] = useState({
    email: '',
    password: ''
  });

  const { email, password } = LoginValue;

  useEffect(() => {
    const bringUserToken = localStorage.getItem('userToken');
    if (bringUserToken) {
      history.replace('/');
    }
  }, []);
  console.log(location.search);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signinObject = {
        email,
        password
      };

      if (!email) {
        sweetAlert('이메일을 입력해주세요.');
      } else if (isEmailValid(email)) {
        sweetAlert('이메일 형식을 맞춰주세요.');
      } else if (!password) {
        sweetAlert('비밀번호를 입력해주세요.');
      } else {
        const { status, data } = await axios.post('/user/signin', signinObject);
        if (status === 200) {
          const {
            data: { token }
          } = data;
          setAuthorization(token);

          const { status: signinStatus, data: getData } = await axios.get('/user/current');
          if (signinStatus === 200) {
            onUserSet(getData.data, token);
            const query = qs.parse(location.search, {
              ignoreQueryPrefix: true
            });
            console.log(query);
            history.push(query?.moveAddress || '/');
          }
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const handleChange = (e) => {
    setLoginValue({
      ...LoginValue,
      [e.target.name]: e.target.value
    });
  };

  return (
    <SigninAllWrap>
      <div className="login-wrap">
        <form className="form_wrap" onSubmit={handleSubmit}>
          <h3>로그인</h3>

          <InputEmail>
            <span>이메일</span>
            <input type="text" placeholder="이메일 입력" onChange={handleChange} name="email" value={email} />
          </InputEmail>

          <InputPassword>
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호 입력" onChange={handleChange} name="password" value={password} />
          </InputPassword>

          <LoginButton>
            <button type="submit">로그인</button>
          </LoginButton>
          <Link to={`/signup${location.search}`}>
            <button type="button">회원가입</button>
          </Link>
        </form>
        <SigninLine>
          <span>또는</span>
          <hr />
        </SigninLine>

        <Social />
      </div>
    </SigninAllWrap>
  );
}

Signin.propTypes = {
  onUserSet: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired
};

const userToPropsDispatch = (dispatch) => ({
  onUserSet: (user, token) => dispatch(setCurrentUser(user, token))
});

export default connect(null, userToPropsDispatch)(Signin);
