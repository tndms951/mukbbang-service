import styled from 'styled-components';

export const SigninAllWrap = styled.div`
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

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    & .login-wrap {
      padding: 36px 53px 109px 53px;
      margin: 100px 0;
    }
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

export const InputPassword = styled.div`
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

export const LoginButton = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  border: none;
  background: none;
  padding: 0;

  background-color: #9a9a9a;

  & button {
    padding: 0;
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

export const SigninUp = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & span {
    float: right;
    margin-top: 14px;
    color: #5c5c5c;
    font-size: 15px;
    display: block;
  }

  & span:hover {
    text-decoration: underline;
  }
`;

export const SigninLine = styled.div`
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
  width: 100%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .socal_wrap {
    &::after {
      clear: both;
      content: '';
      display: block;
    }

    margiin: 0 auto;
    text-algin: center;

    & button {
      display: block;

      & span {
        display: block;
      }

      & img {
        display: block;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & .socal_wrap {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const GoogleWrap = styled.div`
  float: left;
  margin-right: 10px;
  width: 30%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .google_wrap {
    width: 100%;

    & button {
      margin: 0 auto;
      padding: 0;
      border: none;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }
    & img {
      width: 50px;
      padding: 10px;
    }
    & span {
      font-size: 16px;
      font-weight: 500;
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export const FacebookWrap = styled.div`
  width: 30%;
  margin-right: 10px;
  float: left;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .facebook_wrap {
    width: 100%;

    & button {
      margin: 0 auto;
      padding: 0;
      border: none;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }

    & img {
      width: 50px;
      padding: 10px;
    }

    & span {
      font-size: 16px;
      font-weight: 500;
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export const KakaoWrap = styled.div`
  float: left;
  margin-right: 10px;
  width: 30%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .kakao_wrap {
    width: 100%;

    & button {
      margin: 0 auto;
      padding: 0;
      border: none;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
    }

    & img {
      width: 50px;
      padding: 10px;
      border-radius: 50%;
      margin-bottom: 0px;
    }

    & span {
      font-size: 16px;
      font-weight: 500;
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
