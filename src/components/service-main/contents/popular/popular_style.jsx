import styled from 'styled-components';

export const PopularBreadWrap = styled.div`
margin: 120px auto;
outline: 1px solid red;
width: 1024px;

`;

export const PopularWrap = styled.div`
font-size: 32px;
font-weight: 700;
margin-bottom: 32px;
`;

export const BreadList = styled.div`
// outline: 3px solid black;

.list_wrap {
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 26px;
  width: 100%;
  box-sizing: border-box;
  // outline: 1px solid red;
  
 
  &::after {
    clear: both;
    content: '';
    display: block; 
  }


  & li {
    float: left;
    margin-right: 40px;
    margin-bottom: 26px;
    position: relative;

   :nth-child(4) {
     margin-right: 0;
   }
   :nth-child(8) {
     margin-right: 0;
   }
   
    & img{
      width: 214px;
      height: 214px;
      display: block;
    } 

    & .heart_image {
     width: 0;
     height: 0;
      
    }
  }

  & li {
    & .heart_image {
      position: absolute;
      width: 30px;
      height: 25px;
      top: 17px;
      right: 15px;
    }
  }

  & .aaa {
    margin-right: 0;
  }
 
 

  & dl {
    margin-top: 24px;

    & dt {
      margin-bottom: 8px;
      background-color: #0CC3A3;
      border-radius: 4px;
      width: 80px;
      padding: 0 8px;
      color: white;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
    text-align: center;
    }
    & dd {
      margin-bottom: 24px;
      font-size: 24px;
      font-weight: 700;
      
    }
  }
  
}
`;
