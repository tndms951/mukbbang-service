import styled from 'styled-components';

export const EventWrap = styled.div`
  padding: 32px 20px;
  background: #f8f8f8;
  margin: -100px auto;

  & li {
    width: 48%;
    float: left;
    margin-right: 2%;

    & a {
      text-decoration: none;
      color: inherit;
      display: block;
      width: 100%;
    }
  }

  & li:nth-child(2n) {
    margin-right: 0px;
  }

  & .box_wrap {
    display: block;
    margin-bottom: 90px;
    width: 100%;
    height: 250px;
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

    & strong {
      font-weight: 600;
    }

    & .going {
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      width: 20%;
      height: 33%;
      line-height: 85px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    & .close {
      width: 32%;
      height: 60%;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      border-radius: 100%;
      line-height: 155px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & li {
      width: 100%;
      margin-right: 0px;
    }

    & .box_wrap {
      display: block;
      margin: 0 auto;
      margin-bottom: 90px;
      width: 100%;
      height: 250px;
      position: relative;
      cursor: pointer;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
