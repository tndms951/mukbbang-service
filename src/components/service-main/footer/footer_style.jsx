import styled from 'styled-components';

export const FooterAllWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const FooterWarp = styled.div`
  background-color: #383838;
  padding: 4%;
  width: 92%

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 80px;
  }
`;

export const SnsIcon = styled.div`
  margin-bottom: 10px;

  & ul {
    margin-bottom: 28px;
    width: 100%;
    margin: 0 auto;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & li {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 32px;

    & img {
      width: 100%;
      hegith: 100%;
      display: block;
    }
  }

  & li:last-child {
    margin-right: 0;
  }
`;

export const CorpArea = styled.div`
  & ul {
    width: 100%;
    margin: 0 auto;
    color: white;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & li {
    height: 24px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    float: left;
    margin-right: 45px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  .footer_image_wrap {
    float: left;
    width: 15px;
    height: 15px;
    line-height: 30px;
    margin-right: 6px;
  }

  & li:last-of-type img {
    width: 100%;
    height: 100%;
    margin-right: 10px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & li {
      font-size: 12px;
    }

    .footer_image_wrap {
      width: 13px;
      height: 12px;
      margin-right: 3px;
    }

    & li:last-of-type img {
      width: 100%;
      height: 100%;
    }
  }
`;
