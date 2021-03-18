import styled from 'styled-components';

export const BreadPickWrap = styled.div`
margin: 120px auto;
 outline: 1px solid red;
 max-width: 1024px;

`;

export const YoutubePickEvent = styled.div`
outline: 1px solid red;
height: 400px;
background-color: #D7D7D7;
`;

export const PickBreadTitle = styled.div`
outline: 2px solid black;
margin-top: 72px;
margin-bottom: 24px;
padding: 8px 24px;

& span{
  font-size: 22px;
  font-weight: 600;
}
`;

export const Aaa = styled.div`
display: inline-block;
`;

export const PickBreadImage = styled.div`
outline: 3px solid green;
padding: 0 20px;
display: inline-block;

& .pick_title {
  width: 300px;
  outline: 3px solid green;
  margin-top: 20px;
  text-align: center;

  & span {
    display: block;
  }

  & span:nth-child(1) {
    font-size: 22px;
    font-weight: 700;
    outline: 1px solid red;
    margin-bottom: 20px;
  }

  & span:nth-child(2) {
    margin-bottom: 25px;
    outline: 1px solid red;
    font-size: 14px;
  }

  .show_button {
    padding: 8px 24px;
    background: white;
    border: 1px solid #383838;
    font-size: 13px;
    font-weight: 700;
    color: #383838;
    cursor: pointer;
  }
}

`;
