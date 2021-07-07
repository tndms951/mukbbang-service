import styled from 'styled-components';

export const AuthorComment = styled.div`
  margin-bottom: 40px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & img {
    display: inline-block;
    width: 48px !important;
    height: 48px !important;
    line-height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    float: left !important;
  }

  & p {
    display: inline-block;
    font-weight: 700;
    margin-top: 10px;
    width: 30% !important;
  }

  & .modify_Input {
    display: block;
    outline: none;
    resize: none;
    width: 500px;
    margin-top: 15px;
  }

  & .user_content {
    margin-left: 55px;
    line-height: 22px;
  }

  & span {
    display: block;
    margin-top: 10px;
  }

  & .date_wrap {
    margin-left: 55px;

    & span {
      float: left;
      margin-right: 15px;
      font-size: 14px;
      color: #5c5c5c;
    }

    & .button_wrap {
      display: block;
      float: left;
      margin-right: 12px;
    }

    & .button {
      font-size: 14px;
      margin-top: 7px;
      color: #5c5c5c;
      background-color: white;
      border: none;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

export const ReCommentForm = styled.div`
  & .all_wrap {
    width: 95%;
    background: #f8f8f8;
    padding: 20px;
    margin-top: 20px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .made_comment {
    font-size: 14px;
    margin-top: 7px;
    color: #5c5c5c;
    background-color: white;
    border: none;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  & form {
    padding-top: 10px;
    padding-left: 40px;
  }

  & .reCommend_Input {
    display: block;
    margin-top: 10px;
    padding: 10px;
    width: 90%;
    resize: none;
    outline: none;
    float: left;
  }

  & .recomment_button {
    float: right;
    width: 15%;
    border: 1px solid #9a9a9a;
    background: white;
    padding: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    margin-right: 33px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & .all_wrap {
      width: 100%;
      padding: 4%;
      padding: 0px;
      margin-top: 10px;
    }

    & form {
      padding-left: 10px;
    }

    & .recomment_button {
      float: right;
      width: 25%;
      font-size: 13px;
      margin-right: 10px;
    }
  }
`;
