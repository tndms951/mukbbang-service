import styled from 'styled-components';

export const EventWrap = styled.div`
  padding: 32px 272px;
  background: #f8f8f8;

  a {
    text-decoration: none;
    color: inherit;
  }

  & .box_wrap {
    display: block;
    margin-bottom: 75px;
    width: 480px;
    height: 200px;
    position: relative;
    cursor: pointer;

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }

    & p {
      float: right;
    }

    & span {
      font-size: 14ppx;
      margin-top: 10px;
    }

    & .going {
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      width: 15%;
      height: 33%;
      line-height: 67px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    & .close {
      width: 27%;
      height: 60%;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      line-height: 120px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
