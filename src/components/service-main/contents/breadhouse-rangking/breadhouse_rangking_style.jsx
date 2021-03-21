import styled from 'styled-components';

export const HouseRangkingWrap = styled.div`
  margin: 120px auto;
  outline: 1px solid red;
  width: 1024px;

  & h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;

export const ShopRangking = styled.div`
  outline: 3px solid red;
  padding: 8px 24px;
  margin-bottom: 16px;
`;

export const Location = styled.div`
  outline: 6px solid blue;
  padding: 16px 24px;
  margin-bottom: 48px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const SelectWrap = styled.div`
  outline: 3px solid pink;
  display: inline-block;

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

// 셀렉트박스
export const City = styled.div`
  float: left;
  display: block;

  details {
    position: relative;
    width: 160px;
    margin-right: 1rem;
  }

  details[open] {
    z-index: 1;
  }

  summary {
    padding: 9px 16px;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #383838;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary:before {
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
  }

  summary:after {
    content: '';
    display: inline-block;
    float: right;
    width: 0.5rem;
    height: 0.5rem;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    border-bottom-left-radius: 2px;
    transform: rotate(45deg) translate(50%, 0%);
    transform-origin: center center;
    transition: transform ease-in-out 100ms;
  }

  summary:focus {
    outline: none;
  }

  details[open] summary:after {
    transform: rotate(-45deg) translate(0%, 0%);
  }

  ul {
    width: 100%;
    background: white;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    // padding: 18px 16px;
    padding-top: 18px;
    padding-bottom: 18px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: auto;
    outline: 1px solid red;
  }

  li {
    text-align: center;
    width: 100%;
    line-height: 25px;
    margin: 0;
    margin-bottom: 10px;
    padding: 4px 0;
    color: #383838;
    // outline: 1px solid red;
  }

  li:hover {
    background-color: #dcdcdc;
  }

  li:last-child {
    border-bottom: none;
  }

  /* FAKE SELECT */

  summary.radios {
    counter-reset: radios;
  }

  input[type='radio'] {
    counter-increment: radios;
    appearance: none;
    display: none;
    color: #9a9a9a;
  }

  input[type='radio']:checked {
    display: inline;
  }

  input[type='radio']:after {
    content: attr(title);
    display: inline;
    font-size: 1rem;
  }

  ul.list {
    counter-reset: labels;
  }

  label {
    width: 100%;
    display: block;
    cursor: pointer;
  }
`;

export const CurrentLocation = styled.div`
  float: right;

  & button {
    padding: 6px 24px;
    background-color: #3d3d3d;
    cursor: pointer;
  }

  & img {
    width: 20px;
    // outline: 1px solid blue;
    float: left;
  }

  & span {
    font-size: 16px;
    color: white;
    margin-left: 8px;
    // outline: 1px solid red;
    display: block;
    float: left;
    padding: 2px 0;
  }
`;

export const RangkingList = styled.div`
  // outline: 1 px solid red;
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
      margin-bottom: 26px;
      position: relative;

      :nth-child(4) {
        margin-right: 0;
      }
      :nth-child(8) {
        margin-right: 0;
      }

      & img {
        width: 214px;
        height: 214px;
        display: block;
      }

      & .heart_image {
        width: 0;
        height: 0;
      }
    }

    & li:hover {
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
        background-color: #0cc3a3;
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
