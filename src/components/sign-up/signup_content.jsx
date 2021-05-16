import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'qs';

import axios, { setAuthorization } from '../../utils/axios';
import { sweetAlert, isEmailValid, errorhandler } from '../../utils/common';
import { SignupAllWrap, InputEmail, InputName, InputPassword, ReInputPassword, LoginButton, SignupLine } from './signup_content_style';
import { setCurrentUser } from '../redux/user/user.actions';
import Social from '../common-component/social';

function Signup({ onUserSet, history, location }) {
  console.log(location);
  // 기능코드
  const [LoginValue, setLoginValue] = useState({
    email: '',
    password: '',
    name: '',
    repassword: ''
  });

  const { email, password, name, repassword } = LoginValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupObject = {
        email: LoginValue.email,
        password: LoginValue.password,
        name: LoginValue.name,
        type: 'bread'
      };
      if (!email) {
        sweetAlert('이메일을 입력해주세요.');
      } else if (isEmailValid(email)) {
        sweetAlert('이메일 형식을 맞춰주세요.');
      } else if (!name) {
        sweetAlert('이름을 입력해주세요.');
      } else if (!password) {
        sweetAlert('비밀번호를 입력해주세요.');
      } else if (!repassword) {
        sweetAlert('재비밀번호를 입력해주세요.');
      } else {
        const { status, data } = await axios.post('/user/signup', signupObject);
        if (status === 201) {
          const { token } = data.data;
          setAuthorization(token);
          const { status: userStatus, data: userData } = await axios.get('/user/current');
          if (userStatus === 200) {
            onUserSet(userData, token);
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
    <SignupAllWrap>
      <div className="login-wrap">
        <form className="form_wrap" onSubmit={handleSubmit}>
          <h3>회원가입</h3>

          <InputEmail>
            <span>이메일 입력</span>
            <input type="text" placeholder="이메일 입력" onChange={handleChange} name="email" value={email} />
          </InputEmail>

          <InputName>
            <span>이름 입력</span>
            <input type="text" placeholder="이름 입력" name="name" value={name} onChange={handleChange} />
          </InputName>

          <InputPassword>
            <span>비밀번호 입력</span>
            <span>(영문, 숫자, 특수문자 포함 8자리 이상)</span>
            <input type="password" placeholder="비밀번호" onChange={handleChange} name="password" value={password} />
          </InputPassword>

          <ReInputPassword>
            <span>비밀번호 재확인</span>
            <input type="password" placeholder="비밀번호" name="repassword" value={repassword} onChange={handleChange} />
          </ReInputPassword>

          <LoginButton>
            <button type="submit">회원가입</button>
          </LoginButton>
        </form>
        <SignupLine>
          <span>또는</span>
          <hr />
        </SignupLine>

        <Social />
      </div>
    </SignupAllWrap>
  );
}

Signup.propTypes = {
  onUserSet: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onUserSet: (userData, token) => dispatch(setCurrentUser(userData, token))
});

export default connect(null, mapDispatchToProps)(Signup);
