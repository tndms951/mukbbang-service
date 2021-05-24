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
`;

export const NoticeWrap = styled.div`
  background: #f8f8f8;
  outline: 1px solid green;
  padding: 32px 193px;
  margin-top: 23px;

  & ul {
    padding: 24px;
    border: 1px solid #9a9a9a;

    & li {
      padding: 24px;
      border-top: 1px solid #9a9a9a;
      
    }

    & .count_number {
      margin-right: 24px;
      font-weight: 700;
      font- size: 18px;
    }

    & .notice_content {
      font-size: 16px;
      
    }
  }
`;
