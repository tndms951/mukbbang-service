import styled from 'styled-components';

export const HouseDetaile = styled.div`
  margin: 0 auto;
  margin-top: 110px;
`;

export const Grade = styled.div`
  outline: 1px solid red;
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
    outline: 1px solid blue;
  }

  & span {
    color: orange;
  }

  & img {
    outline: 1px solid red;
    line-height: 100px;
    float: right;
    width: 30px;
  }
`;
export const ShopImage = styled.div`
  padding: 0 192px;
  margin-top: 24px;

  & span {
    display: block;
    text-align: center;
    width: 640px;
    height: 240px;
    background: #9a9a9a;
    margin-bottom: 24px;
  }
`;

export const Information = styled.div`
  outline: 3px solid red;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  div {
    font-size: 16px;
    font-weight: 700;
    outline: 2px solid blue;
    width: 213px;
    float: left;
  }
  p {
    display: inline;
    font-weight: 400;
    float: left;
    width: 380px;
  }
`;
