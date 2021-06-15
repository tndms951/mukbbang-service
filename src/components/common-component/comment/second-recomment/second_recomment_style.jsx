import styled from 'styled-components';

export const ReComment = styled.div`
  width: 25%;
  display: inline;

  & .list_all_wrap {
    padding: 20px;
    width: 95%;
    background: #f8f8f8;
    padding: 20px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .list_wrap {
    padding-left: 40px;

    & .content {
      display: block;
      margin-top: 10px;
    }

    & textarea {
      display: block;
      resize: none;
      outline: none;
      margin-top: 7px;
      width: 70%;
    }

    & .button_ {
      margin-left: 55px;
      margin-top: 10px;
      width: 35%;

      &::after {
        clear: both;
        content: '';
        display: block;
      }
    }

    & .current_date {
      float: left;
      font-size: 14px;
      color: #5c5c5c;
      line-height: 18px;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    & .list_all_wrap {
      padding: 10px;
      width: 95%;
      background: #f8f8f8;

      & .current_date {
        // width: 100%;
      }

      & .button_ {
        margin-left: 45px;
        margin-top: 10px;
        width: 80%;
      }
    }
  }
`;

export const ButtonWrap = styled.div`
  font-size: 14px;
  float: right;

  & button {
    border: none;
    background: #f8f8f8;
  }

  & button:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
