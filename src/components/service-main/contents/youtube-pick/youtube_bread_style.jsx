import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BreadPickWrap = styled.div`
  margin: 120px auto;
  outline: 1px solid red;
  max-width: 1024px;
`;

export const YoutubePickEvent = styled.div`
  outline: 1px solid red;
  height: 400px;
  background-color: #d7d7d7;
`;

export const PickBreadTitle = styled.div`
  outline: 2px solid black;
  margin-top: 72px;
  margin-bottom: 24px;
  padding: 8px 24px;

  & span {
    font-size: 22px;
    font-weight: 600;
  }
`;

// export const Aaa = styled.div`
// display: inline-block;
// `;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; //사진,동영상 클릭시 생기는 테두리 제거
  }

  & .VideoContainer {
    margin: 0;
    width: 0;
    margin: 0 20px;
  }

  // & .slick-slider {
  //   width: 80%;
  //   margin: 0 auto;
  //   outline: 3px solid red;
  // }

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
  }

  & .slick-next {
    outline: 3px solid red;
    z-index: 100;
    width: 100px;
    height: 60px;
    background: black;

    &.slick-next:before {
      font-size: 35px;
    }
  }
`;

export const Third = styled.div`
  outline: 1px solid red;
  width: 100%;
  align-item: center;

  & .all_wrap {
    // width: 90%;
    text-align: center;
    outline: 1px solid red;
    margin: 0 auto;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .abcd {
    display: block;
    float: left;
  }

  & .efgh {
    display: block;
    float: right;
  }

  & video {
    outline: 1px solid red;
    margin-top: 30px;
    margin-right: 10px;
  }

  & iframe {
    margin-right: 10px;
  }
`;

export const PickBreadImage = styled.div`
  outline: 3px solid green;
  padding: 0 20px;
  display: inline-block;

  & .pick_title {
    width: 300px;
    outline: 3px solid green;
    margin-top: 20px;
    text-align: center;

    & span {
      display: block;
    }

    & span:nth-child(1) {
      font-size: 22px;
      font-weight: 700;
      outline: 1px solid red;
      margin-bottom: 20px;
    }

    & span:nth-child(2) {
      margin-bottom: 25px;
      outline: 1px solid red;
      font-size: 14px;
    }

    .show_button {
      padding: 8px 24px;
      background: white;
      border: 1px solid #383838;
      font-size: 13px;
      font-weight: 700;
      color: #383838;
      cursor: pointer;
    }
  }
`;
