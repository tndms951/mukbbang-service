import styled from 'styled-components';

export const AuthorComment = styled.div`
  margin-bottom: 40px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & img {
    background: red;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    float: left;
  }

  & p {
    display: inline-block;
    font-weight: 700;
    margin-top: 10px;
  }

  & .modify_Input {
    display: block;
    outline: none;
    resize: none;
    width: 500px;
    margin-top: 15px;
  }

  & span {
    display: block;
    margin-top: 10px;
  }

  & .date_wrap {
    display: inline-block;
    margin-left: 55px;

    & span {
      float: left;
      margin-right: 15px;
      font-size: 14px;
      color: #5c5c5c;
    }

    & span:nth-child(2) {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    & span:nth-child(3) {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  & .made_comment {
    display: inline-block;
  }
`;
