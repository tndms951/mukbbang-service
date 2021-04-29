import styled from 'styled-components';

export const CommentWrap = styled.div`
  margin-top: 40px;
  width: 1024px;
  padding: 0 192px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const CommentBox = styled.div`
  margin-bottom: 70px;

  h2 {
    margin-top: 50px;
  }

  & form {
    width: 100%;
    margin-top: 15px;
  }

  & textarea {
    width: 100%;
    height: 100px;
    outline: none;
    resize: none;
  }

  & .registerButton {
    border: 1px solid #9a9a9a;
    float: right;
    width: 100px;
    background: white;
    padding: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px;
    float: right;
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
