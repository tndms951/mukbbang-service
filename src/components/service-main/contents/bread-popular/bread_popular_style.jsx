import styled from 'styled-components';

export const PopularBreadWrap = styled.div`
  margin: 180px auto;
  width: 1024px;
`;

export const PopularWrap = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
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
    }

    &::after {
      clear: both;
      content: '';
      display: block;
    }

    & a {
      color: inherit;
    }
  }

  // & .infinite-scroll-component {
  //   overflow: hidden;
  // }
`;
