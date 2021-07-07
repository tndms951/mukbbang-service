import styled from 'styled-components';

export const BreadDtail = styled.div`
  width: 1024px;
  margin: 0 auto;

  .loading_title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  & .title_wrap {
    margin-top: 176px;
    margin-bottom: 24px;
    padding-left: 192.5px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .detail_text {
    width: 260px;
    margin: 0 auto;
    display: block;
    color: #383838;
    font-size: 32px;
    font-weight: 700;
    float: left;
    padding: 8px 0px;
  }

  & .heartImage {
    width: 30px;
    float: right;
  }

  & .heartImage > img {
    width: 100%;
    line-height: 100px;
    margin-top: 10px;
  }

  & .image_wrap {
    width: 640px;
    height: 248px;
    padding: 0px 192.5px;
    display: block;
    box-sizing: border-box;
    position: relative;

    & img {
      width: 100%;
      height: 100%;
      display: block;
    }

    & .slick-slider {
      margin-bottom: 65px;
    }
  }

  .slick-prev {
    width: 32px;
    height: 32px;
    display: block;
    z-index: 90;
    position: absolute;
    top: 130px;
    left: 200px;
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
    top: 130px;
    right: 200px;
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

  & .detail_bread_name {
    display: block;
    width: 640px;
    color: #383838;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;
  }
  & .content_text {
    width: 640px;
    margin: 24px auto;
    font-size: 18px;
    color: #383838;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    & .title_wrap {
      margin-top: 100px;
      padding-left: 0px;
    }

    & .detail_text {
      font-size: 20px;
    }

    & .heartImage {
      width: 25px;
    }

    & .image_wrap {
      padding: 0px;
      width: 640px;
    }

    .slick-prev {
      top: 50%;
      left: 0px;
    }

    .slick-next {
      top: 50%;
      right: 0px;
    }

    & .detail_bread_name {
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin-top: 35px;
    }

    & .content_text {
      width: 100%;
      text-align: center;
      font-size: 16px;
      margin: 12px auto;
    }
  }
`;

export const AllWrap = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    width: 96%;
    padding: 0 2%;
  }
`;
