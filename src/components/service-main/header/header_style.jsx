import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const BookMark = styled.div`
  background: #f8f8f8;

  & .bookmarkWrap {
    padding: 4px 24px;
  }

  & .clearfix::after {
    content: '';
    clear: both;
    display: block;
  }
`;

export const LeftBookMark = styled.div`
  float: left;
  line-height: 24px;
  margin: 4px 0;

  & span:first-child {
    margin-right: 32px;
  }
  & span:last-child {
    color: #5c5c5c;
  }

  & img {
    width: 7%;
    margin-left: 8px;
  }
`;

export const RightLogin = styled.div`
  float: right;
  line-height: 24px;

  .userName {
    margin-right: 16px;
    color: #5c5c5c;
    display: inline-block;
    margin-top: 4px;
    margin-bottom: 4px;
    cursor: pointer;
  }

  .userimage {
    border-radius: 50%;
    width: 32px;
    height: 24px;
    float: right;
    display: block;
    background-color: white;
    border: 1px solid #b4b4b4;
    margin: 2px 0;
    cursor: pointer;
  }

  .login {
    margin-right: 32px;
    font-size: 14px;
  }

  .signUp {
    font-size: 14px;
  }

  .login_wrap {
    margin: 4px 0;
  }

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const MyProfile = styled.div`
  border: 1px solid #b4b4b4;
  float: right;
  width: 160px;
  padding: 18px 16px;
  position: absolute;
  z-index: 100;
  top: 40px;
  right: 20px;
  background: white;

  & span {
    display: block;
    margin-bottom: 20px;
    font-weight: 500;
    color: #383838;
    height: 24px;
    line-height: 24px;
  }

  & span:last-child {
    font-weight: 700;
    margin-bottom: 0;
  }

  & span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const GroupNav = styled.div`
  float: left;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 24px 10px 26px;
  background-color: #ffffff;

  & .clearfix::after {
    content: '';
    clear: both;
    display: block;
  }

  & h1 {
    float: left;
    margin: 11px 0px;
    width: 98px;
    height: 18px;
    cursor: pointer;
    & img {
      width: 100%;
    }
  }

  & ul {
    float: left;
    padding: 8px;
    margin-left: 58px;

    & a {
      color: black;
    }
  }

  & li {
    float: left;
    font-family: SpoqaHanSans;
    line-height: 24px;
    margin-right: 40px;
  }
`;

export const NaveSearch = styled.div`
  float: right;
  position: relative;

  & .headerSearch {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 12px;
    left: 22px;
    margin-right: 12px;
    float: left;
  }

  & img {
    width: 100%;
    line-height: 24px;
  }

  & span::before {
    box-sizing: border-box;
    content: '';
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 2px solid #fb7819;
    border-radius: 50%;
    vertical-align: middle;
  }

  & span::after {
    box-sizing: border-box;
    content: '';
    display: inline-block;
    width: 6px;
    border: none;
    border-top: 2px solid #fb7819;
    position: absolute;
    transform: rotate(45deg);
    top: 16px;
    left: 15px;
    margin-left: -2px;
    border-top-right-radius: calc(5px / 2);
    border-bottom-right-radius: calc(5px / 2);
  }

  & input {
    border: 2px solid #fb7819;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 30px 8px 48px;
  }

  & input:focus {
    outline: none;
  }
`;
