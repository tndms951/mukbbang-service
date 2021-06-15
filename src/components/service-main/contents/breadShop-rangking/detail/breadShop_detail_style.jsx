import styled from 'styled-components';

export const HouseDetaile = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 1024px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin-top: 100px;
  }
`;

export const Grade = styled.div`
  padding: 8px 24px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & h1 {
    font-size: 32px;
    font-weight: 700;
    float: left;
    margin-left: 168px;
    width: 225px;
  }

  & img {
    float: right;
    width: 30px;
    line-height: 100px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 28px 24px;

    & h1 {
      font-size: 20px;
      font-weight: 700;
      margin-left: 0px;
    }

    & img {
      float: right;
      width: 25px;
      line-height: 100px;
    }
  }
`;
export const ShopImage = styled.div`
  padding: 0 192px;
  margin-top: 24px;
  z-index: 100;

  & img {
    display: block;
    text-align: center;
    width: 640px;
    height: 248px;
    margin-bottom: 24px;
  }

  & .slick-slider {
    margin-bottom: 65px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 10px;
    margin-top: 0px;

    & .slick-slider {
      margin-bottom: 30px;
    }
  }
`;

export const Information = styled.div`
  margin-bottom: 20px;
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  div {
    font-size: 16px;
    font-weight: 700;
    width: 213px;
    float: left;
  }

  p {
    display: inline;
    font-weight: 400;
    float: left;
    width: 380px;

    & a {
      text-decoration: none;
      color: #000000;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;

    div {
      width: 40%;
    }

    p {
      width: 50%;
    }
  }
`;

export const OtherBread = styled.div`
  padding: 8px 24px;
  box-sizing: border-box;
  line-height: 28px;
  margin-top: 100px;

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
    line-height: 48px;
    font-weight: 700;
    color: #5c5c5c;

    & span:first-of-type {
      display: inline-block;
      margin-right: 16px;
      color: #5c5c5c;
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
    margin-bottom: 10px;

    & h1 {
      font-size: 24px;
    }

    & .all_show {
      font-size: 12px;

      & span:first-of-type {
        font-size: 14px;
        margin-right: 4px;
      }

      & .triangle {
        border-top: 5px solid transparent;
        border-left: 6px solid #5c5c5c;
        border-bottom: 5px solid transparent;
      }
    }
  }
`;

export const BreadShopList = styled.div`
  display: block;
  height: 300px;

  .list_wrap {
    padding-left: 24px;
    padding-right: 24px;
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

      &:nth-child(4) {
        margin-right: 0;
      }
      &:nth-child(8) {
        margin-right: 0;
      }

      & .bread_image_wrap {
        width: 214px;
        height: 214px;
        display: block;

        & img {
          width: 100%;
          height: 100%;
        }
      }
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

  @media ${({ theme }) => theme.device.mobile} {
    height: auto;

    .list_wrap {
      padding: 0 10px;

      & li {
        margin-right: 2%;
        margin-bottom: 16px;
        width: 48%;

        &:nth-child(2n) {
          margin-right: 0;
        }

        & .bread_image_wrap {
          width: 100%;
          height: 100%;
          display: block;

          & img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
