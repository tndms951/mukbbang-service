import styled from 'styled-components';

export const BreadPickList = styled.div`
  width: 1024px;
  margin: 0 auto;

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
      position: relative;

      :nth-child(4) {
        margin-right: 0;
      }
      :nth-child(8) {
        margin-right: 0;
      }

      & .heart_image {
        position: absolute;
        width: 30px;
        height: 25px;
        top: 17px;
        right: 15px;
        cursor: pointer;
      }

      &:nth-child(4n) {
        margin-right: 0px;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    .list_wrap {
      padding: 0px 10px;
      margin-bottom: 15px;
      position: relative;
      width: 100%;
      margin: 0 auto;

      & li {
        margin-right: 2%;
        margin-bottom: 16px;
        width: 49%;

        &:nth-child(2n) {
          margin-right: 0px;
        }
      }
    }
  }
`;
