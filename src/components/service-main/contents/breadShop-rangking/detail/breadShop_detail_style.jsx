import styled from 'styled-components';

export const HouseDetaile = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 1024px;
`;

export const Grade = styled.div`
  padding: 8px 24px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & h1 {
    font-size: 32px;
    font-weight: 700;
    float: left;
    margin-left: 168px;
    width: 225px;
  }

  & img {
    float: right;
    width: 30px;
    line-height: 100px;
  }
`;
export const ShopImage = styled.div`
  padding: 0 192px;
  margin-top: 24px;
  z-index: 100;

  & img {
    display: block;
    text-align: center;
    width: 640px;
    height: 248px;
    margin-bottom: 24px;
  }

  & .slick-slider {
    margin-bottom: 65px;
  }
`;

export const Information = styled.div`
  margin-bottom: 20px;
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  div {
    font-size: 16px;
    font-weight: 700;
    width: 213px;
    float: left;
  }

  p {
    display: inline;
    font-weight: 400;
    float: left;
    width: 380px;

    & a {
      text-decoration: none;
      color: #000000;
    }
  }
`;

export const OtherBread = styled.div`
padding: 8px 24px;
box-sizing: border-box;
line-height: 28px;
margin-top: 100px;

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
  line-height: 48px;
  font-weight: 700;
  color: #5C5C5C;

  & span:first-of-type {
    display: inline-block;
    margin-right: 16px;
    color: #5c5c5c;
  }
  & .triangle {
     display: inline-block;
     width: 0;
     height: 0;
     border-top: 7px solid transparent;
     border-left: 9px solid #5C5C5C;
     border-bottom: 7px solid transparent;
  }
`;

export const BreadShopList = styled.div`
  display: block;
  height: 300px;


  .list_wrap {
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 26px;
    width: 100%;
    box-sizing: border-box;
    
    &::after {
      clear: both;
      content: '';
      display: block; 
    }

    & li {
      float: left;
      margin-right: 40px;
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
`;
