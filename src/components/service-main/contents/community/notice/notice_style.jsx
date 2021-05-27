import styled from 'styled-components';

export const NoticeWrap = styled.div`
  background: #f8f8f8;
  padding: 32px 193px;
  margin-top: 23px;

  & ul {
    padding: 24px;
    border: 1px solid #9a9a9a;

    & li {
      padding: 24px;
      border-top: 1px solid #9a9a9a;
      cursor: pointer;
    }
    
    & li:nth-child(1) {
      padding: 24px;
      border-top: none;
      
    }

    & .count_number {
      margin-right: 24px;
      font-weight: 700;
      font- size: 18px;
    }

    & .notice_content {
      font-size: 16px;
    }

    & .arrow_down {
      width: 10px;
      height: 10px;
      transform: rotate(225deg);
      background: rgb(117, 117, 117);
      float: right;
    }

    & .arrow_down::after {
      content: "";
      position: absolute;
      left: 1px;
      top: 1px;
      width: 10px;
      height: 10px;
      background: rgb(255, 255, 255);
    }

    & .notice_date {
      font-size: 14px;
      width: 18%;
      color: #9a9a9a;
      margin-top: 6px;
      margin-left: 37px;
    }
  }
`;
