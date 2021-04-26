import styled from 'styled-components';

export const ReviewWrapBox = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 1024px;
`;

export const ReviewWrap = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & input {
    display: block;
    width: 500px;
    height: 300px;
  }
`;
export const ReviewText = styled.div`
  margin: 64px 0 29px; 0;
  padding: 8px 192px;
  font-size: 32px;
  font-weight: 700;
  float: left;
`;

export const Register = styled.div`
  float: right;
  margin: 70px 0px 29px 50px;
  padding: 8px 42px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #9a9a9a;
  cursor: pointer;

  &:hover {
    background: #9a9a9a;
    color: white;
    font-weight: 400;
  }
`;

export const ImageMap = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }
  outline: 1px solid red;
`;

export const ImageWrap = styled.div`
  width: 20%;
  display: inline;
  margin-right: 10px;
  margin-top: 20px;
  float: left;
  position: relative;

  & img {
    width: 100%;
    display: inline;
  }

  & .bread_button_wrap {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const CloseWrap = styled.div`
  #image_close_menu span:first-of-type {
    transform: rotate(42deg) translate(5.5px, 2.5px);
  }

  #image_close_menu span:last-of-type {
    transform: rotate(-42deg) translate(5.5px, -2.5px);
  }
  #image_close_menu span {
    width: 26px;
    height: 3px;
    display: block;
    margin: 8px auto 0;
    background: #8f8e8e;
  }
`;

export const ReviewButton = styled.div`
  width: 100px;
  // outline: 1px solid red;
  width: 100%;
  float: right;
  margin-top: 160px;
  text-align: right;

  & button {
    width: 100px;
    padding: 10px 12px;
    display: inline-block;
    background: white;
    font-size: 14px;
    border: 1px solid #7f7f7f;
    border-radius: 50px;
    color: #7f7f7f;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
    outline: none;
  }

  & button:nth-child(2) {
    margin-right: 0;
  }

  & button:nth-child(1):hover {
    background: #d3d3d3;
    color: white;
    border: 1px solid white;
  }

  & button:nth-child(2):hover {
    background: #fb7819;
    color: white;
    border: 1px solid white;
  }
`;

export const ReviewSlid = styled.div`
  .slick-prev {
    width: 32px;
    height: 32px;
    z-index: 100;
    position: absolute;
    top: 150px;
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
    top: 150px;
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

export const ReviewBox = styled.div`
  padding: 32px 192px;
  background: #f8f8f8;

  &.slick-arrow .slick-prev {
    outline: 1px solid red;
  }
`;

export const BoxButton = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const BoxLeft = styled.div`
  & img {
    background: #c4c4c4;
    border-radius: 50%;

    width: 48px;
    height: 48px;
    display: block;
    float: left;
    margin-right: 14px;
  }

  & p:nth-child(2) {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;
    padding: 4px 0;
  }

  & p:nth-child(3) {
    color: #9a9a9a;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  margin-top: 23px;
`;

export const UserImage = styled.div`
  display: inline-block;
  margin-top: 24px;

  & button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  & img {
    width: 96px;
    height: 96px;
    margin-right: 24px;
    background: #c4c4c4;
  }
`;

export const ReviewModal = styled.div`
  & .Modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.16);
  }
  & .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }
  & .Modal > * {
    margin-left: 16px;
    margin-right: 16px;
  }
  & .Modal > *:first-child {
    margin-top: 16px;
  }
  & .Modal p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
  }
  & .Modal .content {
    border-top: 1px solid #bebebe;
    margin-top: 16px;
  }
  & .Modal .content p {
    padding: 8px;
    font-size: 12pt;
    color: #999;
  }
  & .Modal .button-wrap {
    margin: 0;
    margin-top: 8px;
  }
  & .Modal .button-wrap button {
    width: 100%;
    padding: 12px 0;
    border-radius: 0 0 10px 10px;
    background-color: #ad7cef;
    font-size: 13pt;
    color: white;
    border: 0;
    cursor: pointer;
  }
  & .Modal .button-wrap button:hover {
    background-color: #7f49c8;
  }
  & .Modal .button-wrap button:active {
    background-color: #7e49c8;
  }
`;
