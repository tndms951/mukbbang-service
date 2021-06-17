import styled from 'styled-components';

export const PickWrap = styled.div`
  width: 1024px;
  margin: 200px auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 96%;
    margin-top: 140px;
    padding: 0 2%:

  }
`;

export const TitleButton = styled.div`
  margin-bottom: 50px;
  display: block;
  text-align: center;
  width: 50%;
  margin: 50px auto;
  padding: 0 4%;

  & a {
    text-decoration: none;
  }

  & span {
    padding: 2% 14%;
    background: #f8f8f8;
    color: #5c5c5c;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  & .breadShop_active {
    background: #fb7819;
    color: white;
  }

  & .bread_active {
    background: #fb7819;
    color: white;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 60%;
    padding: 0 4%;

    margin-bottom: 20px;
    display: block;
    text-align: center;

    & span {
      padding: 2% 14%;
      font-size: 14px;
      display: inline-block;
      text-align: center;
    }
  }
`;
