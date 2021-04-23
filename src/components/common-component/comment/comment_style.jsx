import styled from 'styled-components';

export const CommentWrap = styled.div`
  margin-top: 40px;
`;

export const CommentBox = styled.div`
  // outline: 1px solid red;
  text-align: center;
  margin-bottom: 40px;

  & textarea {
    width: 700px;
    height: 100px;
    outline: none;
    resize: none;
  }

  & .registerButton {
    text-align: right;
  }
`;

export const AuthorComment = styled.div`
  padding: 0 192px;
  outline: 1px solid red;

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
  }

  & .made_comment {
    display: inline-block;
  }
`;

export const ReComment = styled.div`
  background: #f8f8f8;
  margin-top: 20px;
  padding: 0 192px;

  // &::after {
  //   clear: both;
  //   content: '';
  //   display: block;
  // }

  // & img {
  //   background: red;
  //   display: inline-block;
  //   width: 48px;
  //   height: 48px;
  //   line-height: 24px;
  //   border-radius: 50%;
  //   margin-right: 8px;
  //   float: left;
  // }

  // & p {
  //   display: inline-block;
  //   font-weight: 700;
  //   margin-top: 10px;
  // }

  // & span {
  //   display: block;
  //   margin-top: 10px;

  // }

  // & .date {
  //   display: inline-block;
  //   margin-left: 10px;
  //   font-size: 14px;
  //   color: #5c5c5c;
  // }

  // & .made_comment {
  //   display: inline-block;
    
  // }
};
`;
