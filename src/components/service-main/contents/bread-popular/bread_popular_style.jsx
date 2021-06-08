import styled from 'styled-components';

export const PopularBreadWrap = styled.div`
  margin: 150px auto;
  width: 1024px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin: 100px auto;
  }
`;

export const PopularWrap = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;

    h1 {
      font-size: 20px;
    }
  }
`;

export const BreadList = styled.div`
  & .list_wrap {
    width: 100%;
    box-sizing: border-box;
    padding: 0px 24px;
    margin-bottom: 26px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & a {
      display: block;
      text-decoration: none;
      color: inherit;
    }

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & .list_wrap {
      padding: 0px 10px;

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
