import styled from 'styled-components';

export const BreadliWrap = styled.div`
  & .bread_li_wrap {
    width: 214px;
    float: left;
    margin-right: 30px;
    margin-bottom: 26px;
    position: relative;
    box-sizing: border-box;
    outline: 1px solid blue;

    & .bread_image_wrap {
      width: 100%;
      height: 214px;
      display: block;
      outline: 1px solid black;

      & > img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    & .heart_wrap {
      width: 30px;
      height: 25px;
      display: block;
      position: absolute;
      top: 17px;
      right: 15px;

      & .heart_image {
        width: 100%;
      }
    }

    & dl {
      margin-top: 24px;
      outline: 1px solid pink;

      & dt {
        width: 80px;
        height: 24px;
        margin-bottom: 8px;
        background-color: #0cc3a3;
        border-radius: 4px;
        padding: 0 8px;
        color: white;
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
  .bread_li_wrap:nth-child(4n) {
    margin-right: 0px;
    outline: 1px solid red;
  }
`;
