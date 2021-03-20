import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { sweetAlert, isEmailValid, errorhandler } from '../../utils/common';
import axios, { setAuthorization } from '../../utils/axios';
// eslint-disable-next-line object-curly-newline
import {
  SigninAllWrap,
  InputEmail,
  InputPassword,
  LoginButton,
  SigninLine
  // eslint-disable-next-line object-curly-newline
} from './signin_content_style';
import Social from '../common-component/social';

function Signin({ onUserSet, history }) {
  const [LoginValue, setLoginValue] = useState({
    email: '',
    password: ''
  });

  const { email, password } = LoginValue;

  useEffect(() => {
    const bringToken = localStorage.getItem('userToken');
    if (bringToken) {
      history.replace('/');
    }
  }, []);

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
        const { data } = await axios.post('/user/signin', signinObject);
        // eslint-disable-next-line object-curly-newline
        const {
          data: { token }
          // eslint-disable-next-line object-curly-newline
        } = data;
        setAuthorization(token);

        const { status, data: getData } = await axios.get('/user/current');

        if (status === 200) {
          onUserSet(getData.data, token);
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
    <>
      <SigninAllWrap>
        <div className="login-wrap">
          <form className="form_wrap" onSubmit={handleSubmit}>
            <h3>로그인</h3>

            <InputEmail>
              <span>이메일</span>
              <input
                type="text"
                placeholder="이메일 입력"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </InputEmail>

            <InputPassword>
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호 입력"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </InputPassword>

            <LoginButton>
              <button type="submit">로그인</button>
            </LoginButton>
          </form>
          <SigninLine>
            <span>또는</span>
            <hr />
          </SigninLine>

          <Social />
        </div>
      </SigninAllWrap>
    </>
  );
}

Signin.propTypes = {
  onUserSet: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

const userToPropsDispatch = (dispatch) => ({
  onUserSet: (user, token) => dispatch(setCurrentUser(user, token))
});

export default connect(null, userToPropsDispatch)(Signin);
