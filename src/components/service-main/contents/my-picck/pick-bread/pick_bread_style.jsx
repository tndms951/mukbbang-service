import styled from 'styled-components';

export const PickBreadList = styled.div`
  width: 1024px;
  margin: 0 auto;

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
    width: 100%;

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
