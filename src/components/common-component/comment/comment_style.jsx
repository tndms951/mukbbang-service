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

  & textarea[readonly] {
    cursor: pointer;
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

export const MoreButton = styled.div`
  margin: 40px 0;
  text-align: center;
  border: 1px solid #9a9a9a;

  & button {
    background: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
  }
`;
