import styled from 'styled-components';

export const CommunityWrap = styled.div`
  margin: 200px auto;
  max-width: 1024px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 96%;
    margin-top: 140px;
    padding: 0 2%:
  }
`;

export const TitleButton = styled.span`
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

  & .notice_active {
    background: #fb7819;
    color: white;
  }

  & .event_action {
    background: #fb7819;
    color: white;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 0px;
    margin-bottom: 20px;
    display: block;
    text-align: center;

    & span {
      padding: 4% 15%;
      font-size: 16px;
      display: inline-block;
      text-align: center;
    }
  }
`;
