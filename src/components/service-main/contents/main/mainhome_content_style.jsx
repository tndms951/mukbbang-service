import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Main = styled.div`
  margin: 0 auto;
  margin-top: 110px;
`;

export const eventSwiper = styled(Slider)`
  width: 1024px;
  outline: 1px solid blue;

  // .slick-slide div {
  //   outline: none; //사진,동영상 클릭시 생기는 테두리 제거
  // }
`;

export const MainBackground = styled.div`
  & div {
    // width: 1024px;
    // margin: 0 auto;
    margin-top: 20px;
    outline: 3px solid black;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & img {
    outline: 1px solid red;
    display: block;
    float: left;
    width: 200px;
    margin-right: 40px;
  }

  & .slick-active {
    width: 0;
  }

  & .slick-prev {
    outline: 3px solid red;
    z-index: 100;
    width: 100px;
    height: 60px;
    opaicty: 1;
    color: black;
    background: black;
    left: 0;

    &.slick-prev:before {
      font-size: 35px;
    }
`;

export const BreadShopRanking = styled.div`
  padding: 8px 24px;
  box-sizing: border-box;
  line-height: 28px;
  width: 1024px;
  margin: 0 auto;

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

  & .all_show {
    float: right;
    font-size: 18px;
    font-weight: 700;
    color: #5c5c5c;

    & span:first-of-type {
      margin: 10px 0;
      display: inline-block;
      margin-right: 16px;
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
`;

export const BreadShopList = styled.div`
  width: 1024px;
  margin: 0 auto;

  .list_wrap {
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 26px;
    width: 100%;
    box-sizing: border-box;
    // outline: 1px solid red;

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & li {
      float: left;
      margin-right: 40px;
      // outline: 1px solid red;
      margin-bottom: 26px;
      position: relative;

      :nth-child(4) {
        margin-right: 0;
      }
      :nth-child(8) {
        margin-right: 0;
      }

      & img {
        width: 214px;
        height: 214px;
        display: block;
      }

      & .heart_image {
        position: absolute;
        width: 30px;
        height: 25px;
        top: 17px;
        right: 15px;
        }
  

    & .aaa {
      margin-right: 0;
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
`;
