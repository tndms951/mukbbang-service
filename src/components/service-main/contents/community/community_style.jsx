import styled from 'styled-components';

export const CommunityWrap = styled.div`
  margin: 180px auto;
  max-width: 1024px;
`;

export const TitleButton = styled.span`
  outline: 1px solid red;
  padding: 20px 320px;

  & a {
    text-decoration: none;
  }

  & span {
    padding: 12px 70px;
    background: #f8f8f8;
    color: #5c5c5c;
    font-size: 16px;
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
`;
