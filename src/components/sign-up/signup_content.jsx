import React, { useState } from 'react';

import axios from '../../utils/axios';
import { sweetAlert, isEmailValid, errorhandler } from '../../utils/common';
import {
  SignupAllWrap,
  InputEmail,
  InputName,
  InputPassword,
  ReInputPassword,
  LoginButton,
  SignupLine
} from './signup_content_style';
import Social from '../common-component/social';

function Signup() {
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
        const { data } = await axios.post('/user/signup', signupObject);
        console.log(data);
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
      <SignupAllWrap>
        <div className="login-wrap">
          <form className="form_wrap" onSubmit={handleSubmit}>
            <h3>회원가입</h3>

            <InputEmail>
              <span>이메일 입력</span>
              <input
                type="text"
                placeholder="이메일 입력"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </InputEmail>

            <InputName>
              <span>이름 입력</span>
              <input
                type="text"
                placeholder="이름 입력"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </InputName>

            <InputPassword>
              <span>비밀번호 입력</span>
              <span>(영문, 숫자, 특수문자 포함 8자리 이상)</span>
              <input
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </InputPassword>

            <ReInputPassword>
              <span>비밀번호 재확인</span>
              <input
                type="password"
                placeholder="비밀번호"
                name="repassword"
                value={repassword}
                onChange={handleChange}
              />
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
    </>
  );
}

export default Signup;
