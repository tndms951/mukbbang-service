import styled from 'styled-components';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export const BreadPickWrap = styled.div`
  margin: 180px auto;
  max-width: 1024px;
`;

export const YoutubePickEvent = styled.div`
  height: 400px;
  background-color: #d7d7d7;
`;

export const PickBreadTitle = styled.div`
  margin-top: 72px;
  margin-bottom: 24px;
  padding: 8px 24px;

  & span {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const StyledSlider = styled.div`
  padding: 0 24px;

  & .infinite-scroll-component {
    overflow: hidden !important;
  }
`;

export const PickBreadOdd = styled.div`
  width: 100%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .VideoContainer {
    width: 450px;
    float: left;
    margin-right: 40px;
  }

  & .pick_title {
    width: 383px;
    float: right;
    margin-top: 70px;
    margin-left: 40px;

    & span {
      display: block;
    }

    & span:nth-child(1) {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    & span:nth-child(2) {
      margin-bottom: 25px;
      font-size: 16px;
    }

    .show_button {
      padding: 8px 24px;
      background: white;
      border: 1px solid #383838;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    & a {
      color: #383838;
      text-decoration: none;
    }
  }
`;

export const PickBreadEven = styled.div`
  width: 100%;
  margin: 74px; 0px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .pick_title_even {
    float: left;
    width: 383px;
    margin-top: 70px;
    margin-right: 40px;

    & span {
      display: block;
    }

    & span:nth-child(1) {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    & span:nth-child(2) {
      margin-bottom: 25px;
      font-size: 16px;
    }

    & .show_button_even {
      padding: 8px 24px;
      background: white;
      border: 1px solid #383838;
      font-size: 16px;
      font-weight: 700;
      color: #383838;
      cursor: pointer;
    }

    & a {
      color: #383838;
      text-decoration: none;
    }
  }

  & .VideoContainer_even {
    float: right;
  }
`;
