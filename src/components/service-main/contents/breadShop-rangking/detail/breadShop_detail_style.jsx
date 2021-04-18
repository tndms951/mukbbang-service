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

  & span {
    color: #fb7819;
  }

  & img {
    float: right;
    width: 30px;
    line-height: 100px;
    // margin-right: 170px;
  }
`;
export const ShopImage = styled.div`
  padding: 0 192px;
  margin-top: 24px;
  z-index: 100;

  & img {
    display: block;
    text-align: center;
    outline: 1px solid red;
    width: 640px;
    height: 248px;
    margin-bottom: 24px;
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
  }
`;

export const ReviewWrap = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & input {
    display: block;
    outline: 1px solid red;
    width: 500px;
    height: 300px;
  }
`;

export const Review = styled.div`
  margin: 64px 0 29px; 0;
  padding: 8px 192px;
  font-size: 32px;
  font-weight: 700;
  float: left;
`;

export const ReviewButton = styled.div`
  width: 100px;
  // outline: 1px solid red;
  width: 100%;
  float: right;
  margin-top: 160px;
  text-align: right;

  & span {
    width: 100px;
    padding: 10px 12px;
    display: inline-block;
    font-size: 14px;
    border: 1px solid #7f7f7f;
    border-radius: 50px;
    color: #7f7f7f;
    margin-right: 10px;
    text-align: center;
    cursor: pointer;
  }

  & span:nth-child(2) {
    margin-right: 0;
  }

  & span:nth-child(1):hover {
    background: #d3d3d3;
    color: white;
    border: 1px solid white;
  }

  & span:nth-child(2):hover {
    background: #fb7819;
    color: white;
    border: 1px solid white;
  }
`;

export const Register = styled.div`
  float: right;
  margin: 70px 0px 29px 50px;
  padding: 8px 42px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid #9a9a9a;
  cursor: pointer;

  &:hover {
    background: #9a9a9a;
    color: white;
    font-weight: 400;
  }
`;

export const ReviewBox = styled.div`
  padding: 32px 192px;
  background: #f8f8f8;
`;

export const BoxButton = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const BoxLeft = styled.div`
  & img {
    background: #c4c4c4;
    border-radius: 50%;

    width: 48px;
    height: 48px;
    display: block;
    float: left;
    margin-right: 14px;
  }

  & p:nth-child(2) {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;
    padding: 4px 0;
  }

  & p:nth-child(3) {
    color: #9a9a9a;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  margin-top: 23px;
`;

export const UserImage = styled.div`
  display: inline-block;
  margin-top: 24px;

  & img {
    width: 96px;
    height: 96px;
    margin-right: 24px;
    background: #c4c4c4;
  }
`;

export const Comment = styled.div`
  margin-top: 40px;
`;

export const CommentBox = styled.div`
  // outline: 1px solid red;
  text-align: center;
  margin-bottom: 40px;
  & input {
    width: 700px;
    height: 50px;
  }
`;

export const AuthorComment = styled.div`
  padding: 0 192px;

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
`;

export const BreadShopList = styled.div`
  outline: 1px solid red;
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
