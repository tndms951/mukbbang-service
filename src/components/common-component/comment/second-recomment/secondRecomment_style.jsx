import styled from 'styled-components';

export const ReComment = styled.div`
  width: 25%;
  display: inline;

  & .aaa {
    width: 95%;
    background: #f8f8f8;
    margin-top: 20px;
    padding: 20px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .bbb {
    padding-top: 30px;
    padding-left: 40px;

    & .content {
      display: block;
      margin-top: 10px;
      // outline: 1px solid red;
    }
  }

  & .reCommend_Input {
    display: block;
    margin-left: 80px;
    margin-top: 10px;
    width: 70%;
    resize: none;
    outline: none;
  }

  & .recomment_button {
    float: right;
    background: #4978f4;
    color: white;
    border: none;
    padding: 8px;
    margin-top: 5px;
    margin-right: 20px;
    cursor: pointer;
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
`;
