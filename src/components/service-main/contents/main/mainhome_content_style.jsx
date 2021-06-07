import styled from 'styled-components';
import Slider from 'react-slick';

export const Main = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export const MainBackground = styled(Slider)`
  margin-bottom: 64px;

  & img {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .slick-prev {
    width: 32px;
    height: 32px;
    z-index: 100;
    position: absolute;
    top: 200px;
    left: 1px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgb(0 0 0 / 18%) 0px 2px 4px !important;
    border-radius: 50%;
  }

  & .slick-prev:before {
    color: rgb(34, 34, 34);
  }

  .slick-next {
    width: 32px;
    height: 32px;
    z-index: 100;
    position: absolute;
    top: 200px;
    right: 1px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgb(0 0 0 / 18%) 0px 2px 4px !important;
    border-radius: 50%;
  }

  & .slick-next:before {
    color: rgb(34, 34, 34);
  }

  .slick-dots {
    margin-bottom: 25px;
  }
`;

export const BreadShopRanking = styled.div`
  padding: 8px 24px;
  box-sizing: border-box;
  line-height: 28px;
  margin-top: 180px;
  margin-bottom: 24px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & h1 {
    float: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
  }

  & .webSize {
    display: block;
  }

  & .mobileSize {
    display: none;
  }

  & .all_show {
    float: right;
    font-size: 18px;
    font-weight: 700;
    color: #5c5c5c;

    a {
      color: #5c5c5c;
    }

    & span:first-of-type {
      display: inline-block;
      margin-right: 16px;
      line-height: 46px;
    }
    & .triangle {
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-left: 9px solid #5c5c5c;
      border-bottom: 7px solid transparent;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 80px;

    & h1 {
      font-size: 20px;
    }
    & .webSize {
      display: none;
    }

    & .mobileSize {
      display: block;
    }

    & .all_show {
      font-size: 18px;

      & span:first-of-type {
        margin-right: 5px;
        font-size: 14px;
      }
      & .triangle {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 6px solid #5c5c5c;
        border-bottom: 6px solid transparent;
      }
    }
  }
`;

export const BreadShopList = styled.div`
  .list_wrap {
    padding: 0 24px;
    margin-bottom: 26px;
    width: 100%;
    box-sizing: border-box;

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & li {
      float: left;
      margin-right: 40px;
      margin-bottom: 26px;
      position: relative;

      :nth-child(4) {
        margin-right: 0;
      }
      :nth-child(8) {
        margin-right: 0;
      }

      a {
        text-decoration: none;
        color: black;
      }

      & .image_wrap {
        width: 214px;
        height: 214px;
      }

      & img {
        width: 100%;
        height: 100%;
        display: block;
      }

      & .heart_image {
        position: absolute;
        width: 30px;
        height: 25px;
        top: 17px;
        right: 15px;
        cursor: pointer;
      }
    }

    & dl {
      margin-top: 24px;

      & dt {
        margin-bottom: 8px;
        background-color: #0cc3a3;
        border-radius: 4px;
        width: 80px;
        padding: 0 8px;
        color: white;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
      }
      & dd {
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .list_wrap {
      padding: 0px 10px;
      margin-bottom: 15px;
      position: relative;
      width: 100%;
      margin: 0 auto;
  

    & li {
      margin-right: 2%;
      margin-bottom: 16px;
      width: 49%;

      &:nth-child(2n) {
        margin-right: 0px;
      }

      & a {
        text-decoration: none;
        color: black;
        display: block;
        width: 100%;
        height: 100%;
      }

      & .image_wrap {
        width: 100%;
        height: auto;
        margin: 0 auto;
      }

      & img {
        width: 100%;
        height: 100%;
        display: block;
      }
    

    & .heart_image {
      position: absolute;
      top: 12px;
      right: 8px;
      cursor: pointer;
    }
  }

    & dl {
      margin-top: 24px;
      text-align: center;

      & dt {
        width: 40%;
        margin: 0 auto;
        margin-bottom: 8px;
        font-size: 14px;
        text-align: center;
      }
      & dd {
        margin-bottom: 24px;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
`;
