import styled from 'styled-components';

export const FooterWarp = styled.div`
  background-color: #383838;
  // height: 192px;
  padding: 36px; 214px; 80px 214px;
  box-sizing: border-box;
  width: 100%;

  & .clearfix::after {
    content: '';
    clear: both;
    display: block;
  }
`;

export const SnsIcon = styled.div`
  backgroun-color: red;

  & .clearfix::after {
    content: '';
    clear: both;
    display: block;
  }

  & ul {
    margin-bottom: 28px;
    width: 23%;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  & li {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 32px;

    & img {
      width: 24px;
      hegith: 24px;
    }
  }

  & li:last-child {
    margin-right: 0;
  }
`;

export const CorpArea = styled.div`
  margin-bottom: 40px;

  & .clearfix::after {
    content: '';
    clear: both;
    display: block;
  }

  & ul {
    width: 51%;
    margin: 0 auto;
    color: white;
    height: 24px;
  }

  & li {
    height: 24px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    float: left;
    margin-right: 45px;
  }

  & li:nth-child(2) img {
    width: 14px;
    height: 20px;
    margin-right: 13px;
  }

  & li:nth-child(2) span {
    line-height: 24px;
  }

  & li:last-of-type img {
    width: 20px;
    height: 16px;
    margin-right: 10px;
  }
`;
