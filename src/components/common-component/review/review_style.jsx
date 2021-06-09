import styled from 'styled-components';

export const ReviewWrapBox = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 1024px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
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

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
  }
`;
export const ReviewText = styled.div`
  margin: 64px 0 29px; 0;
  padding: 8px 192px;
  font-size: 32px;
  font-weight: 700;
  float: left;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 10px;
    margin: 0px;
    font-size: 24px;
  }
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

  @media ${({ theme }) => theme.device.mobile} {
    margin: 0px;
    padding: 4px 20px;
    font-size: 14px;
  }
`;

// 리뷰 등록시 모달
export const RegisterReviewWrap = styled.div`
  & .review_modal_wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & .review_modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 50%;
    height: 500px;
    z-index: 101;
    border-radius: 10px;
    background-color: white;
    overflow: scroll;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }

  & .review_modal > * {
    margin-left: 16px;
    margin-right: 16px;
  }

  & .review_modal > *:first-child {
    margin-top: 16px;
  }

  & .review_modal .title {
    font-size: 16pt;
    font-weight: bold;
    color: #fb7819;
    fontsize: 28px;
  }
  & .review_modal .title_text {
    color: #383838;
    font-size: 18px;
  }

  & .review_modal .review_form_modal {
    margin-top: 16px;
  }
`;
export const RegisterReview = styled.div`
  & textarea {
    width: 90%;
    height: 200px;
    border: 1px solid #dbdbdb;
    padding: 13px;
    margin: 20px 0 0 20px;
    resize: none;
    outline: none;
  }

  & input {
    opacity: 0;
    position: absolute;
    display: inline;
    margin-top: 20px;
    margin-left: 25px;
    z-index: 100;
    width: 89px;
    height: 89px;
    line-height: 89px;
    text-align: center;
    border: 1px dashed #DBDBDB;
    background: white;
    cursor: pointer;
  }

  & .file_button {
    width: 89px;
    height: 89px;
    line-height: 89px;
    padding: 0;
    margin-top: 20px;
    margin-left: 25px;
    text-align: center;
    border: 1px dashed #DBDBDB;
    background: white;
    cursor: pointer;
  }
    & i {
      display: block;
      margin: 0 auto;
      width: 27px;
      height: 27px;
      cursor: pointer;
      background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/plus_icon.svg);
      background-size: cover;
    }
  }
`;

export const ImageMap = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const ImageWrap = styled.div`
  width: 20%;
  display: inline;
  margin: 20px 10px 0 20px;
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
  width: 100%;
  float: right;
  text-align: right;

  & .reviewButton {
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
  .background_wrap {
    background: #f8f8f8;
    height: 300px;
    text-align: center;
  }

  .slick-prev {
    width: 32px;
    height: 32px;
    display: block;
    z-index: 90;
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
    z-index: 90;
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

  @media ${({ theme }) => theme.device.mobile} {
    width: 92%;
    padding: 4%;
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

  & .button_wrap {
    width: 80%;
  }

  & .user_wrap {
    float: left;
    width: 70%;
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
  margin-bottom: 40px;

  & button {
    cursor: pointer;
    border: none;
    outline: none;
    margin-right: 15px;
  }

  & img {
    width: 96px;
    height: 96px;
    background: #c4c4c4;
  }
`;

// 이미지 클릭 모달
export const ReviewModal = styled.div`
  & .Modal-overlay {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  & .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 20px;
    z-index: 101;
    transform: translate(-50%, -50%);
    width: 50%;
    // height: 430px;
    overflow: scroll;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }
  & .Modal > * {
    margin: 0 16px;
  }
  & .Modal > *:first-child {
    margin-top: 16px;
  }
  & .Modal p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  & .Modal .content {
    margin-top: 30px;
    width: 80%;
    margin: 0 auto;
  }
  & .Modal .content .modal_image {
    width: 100% !important;
    font-size: 12pt;
    display: block;
    color: #999;
    margin: 0 auto;
  }
  & .Modal .button-wrap {
    margin-top: 8px;
    vertical-align: bottom;
    border: 1px solid #9a9a9a;
  }
  & .Modal .button-wrap button {
    width: 100%;
    padding: 10px 0;
    background-color: white;
    font-size: 13pt;
    border: 0;
    cursor: pointer;
  }
  & .Modal .button-wrap button:hover {
    background-color: #9a9a9a;
    color: white;
  }
  & .slick-dots {
    margin-bottom: 25px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & .Modal {
      width: 80%;
    }

    & .Modal p.title {
      font-size: 12pt;
    }

    & .Modal .button-wrap button {
      padding: 6px 0;
      font-size: 10pt;
    }

    & .slick-dots li {
      width: 15px;
    }
  }
`;
