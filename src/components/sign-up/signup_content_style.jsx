import styled from 'styled-components';

export const SignupAllWrap = styled.div`
  background-color: #f8f8f8;
  width: 466px;
  margin: 0 auto;
  margin-top: 106px;

  & .login-wrap {
    padding: 46px 83px 129px 83px;
    margin: 170px 0;
  }

  & .form_wrap input::-webkit-input-placeholder {
    color: 9a9a9a;
  }

  & h3 {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const InputEmail = styled.div`
  display: block;
  margin-top: 35px;

  & span {
    display: block;
    margin-top: 35px;
  }

  & input {
    margin-top: 7px;
    width: 100%;
    line-height: 24px;
    font-size: 16px;
    padding: 8px 16px;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
  }
`;

export const InputName = styled.div`
  display: block;
  margin-top: 35px;

  & span {
    display: block;
    margin-top: 35px;
  }

  & input {
    margin-top: 7px;
    width: 100%;
    line-height: 24px;
    font-size: 16px;
    padding: 8px 16px;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
  }
`;

export const InputPassword = styled.div`
  display: block;
  margin-top: 35px;

  & span {
    margin-top: 35px;
  }

  & span:last-of-type {
    color: #0cc3a3;
    font-size: 12px;
    margin-left: 3px;
  }

  & input {
    margin-top: 7px;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
  }
`;

export const ReInputPassword = styled.div`
  display: block;
  margin-top: 35px;

  & span {
    display: block;
    margin-top: 35px;
  }

  & input {
    margin-top: 7px;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  border: none;
  background: none;

  & button {
    background-color: #9a9a9a;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 48px;
    width: 100%;
    display: block;
    cursor: pointer;

    &:hover {
      background-color: #fb7819;
    }
  }
`;

export const SignupLine = styled.div`
  position: relative;
  padding: 30px 0px;

  & span {
    position: absolute;
    background-color: #f8f8f8;
    top: 31px;
    padding: 0 8px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #b4b4b4;
  }
`;

export const SosalLogin = styled.div`
  float: left;
  margin-left: 46px;

  & .clearfix::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const GoogleWrap = styled.div`
  width: 56px;
  height: 56px;
  float: left;
  margin-right: 22px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);

  & button {
    padding: 0;
    border: none;
    background: none;
  }
  & img {
    width: 32px;
    padding: 12px;
    margin-bottom: 8px;
  }
  & span {
    font-size: 14px;
  }
`;

export const FacebookWrap = styled.div`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 22px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);

  & button {
    border: none;
    padding: 0;
    background: none;
  }

  & img {
    width: 32px;
    padding: 12px;
    margin-bottom: 8px;
  }

  & span {
    font-size: 14px;
  }
`;

export const KakaoWrap = styled.div`
  width: 56px;
  height: 56px;
  float: left;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);

  & img {
    width: 32px;
    padding: 12px;
    border-radius: 50%;
    margin-bottom: 9px;
  }

  & span {
    font-size: 14px;
    display: block;
  }
`;
