import styled from 'styled-components';

export const Main = styled.div`
margin: 0 auto;
margin-top: 110px;

`;

export const MainBackground = styled.div`

  width: 1024px;
  height: 400px;
  margin: 0 auto;
  background-color: #D7D7D7;
  margin-bottom: 64px;
  box-sizing: border-box;

`;

export const BreadShopRanking = styled.div`

 padding: 8px 24px;
 box-sizing: border-box;
 line-height: 28px;
 width: 1024px;
 margin: 0 auto;

 &::after {
  clear: both;
  content: '';
  display: block; 
}

 & h1 {
   float: left;
   font-size: 32px;
   font-weight: 700;
   line-height: 48px;
 }

 & .all_show {
   float: right;
   font-size: 18px;
   font-weight: 700;
   color: #5C5C5C;

   & span:first-of-type {
     margin: 10px 0;
     display: inline-block;
     margin-right: 16px;
   }
   & .triangle {
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-left: 9px solid #5C5C5C;
      border-bottom: 7px solid transparent;
   }
 }
`;

export const BreaShopList = styled.div`
width: 1024px;
margin: 0 auto;


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
    // outline: 1px solid red;
    margin-bottom: 26px;

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
