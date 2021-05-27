import styled from 'styled-components';

export const EventWrap = styled.div`
  margin-top: 23px;
  padding: 32px 272px;
  background: #f8f8f8;

  & .box_wrap {
    border: 1px solid #9a9a9a;
    display: block;
    padding: 20px;
    height: 88px;
    margin-bottom: 32px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & span {
      display: block;
    }

    & img {
      width: 100px;
    }

    & p {
      float: right;
    }

    & .going {
      width: 50px;
      background: #fb7819;
      color: white;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      width: 13%;
      height: 60%;
      line-height: 53px;
    }

    & .close {
      width: 50px;
      background-color: #d7d7d7;
      color: #5c5c5c;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      width: 13%;
      height: 60%;
      line-height: 53px;
    }
  }
`;
