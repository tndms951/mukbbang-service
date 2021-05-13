import styled from 'styled-components';

export const BreadliWrap = styled.li`
  width: 214px;
  float: left;
  margin-right: 40px;
  margin-bottom: 26px;
  position: relative;
  box-sizing: border-box;

  &:nth-child(4n) {
    margin-right: 0px;
  }

  & .bread_image_wrap {
    width: 100%;
    height: 214px;
    display: block;

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
`;
