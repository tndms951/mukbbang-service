import styled from 'styled-components';

export const ShopliWrap = styled.li`

  & a {
    text-decoration: none;
    color: black;
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

  & .image_wrap {
    width: 214px;
    height: 214px;

    & img {
      width: 100%;
      height: 100%;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    & .image_wrap {
      width: 100%;
      height: 100%;

      & img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    & dl {
      text-align: center;


      & dt {
        margin: 0 auto;
        margin-bottom: 8px;
        font-size: 14px;
        text-align: center;
      }

      & dd {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 700;
      }
    }
`;
