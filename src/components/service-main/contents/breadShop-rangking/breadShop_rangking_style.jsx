import styled from 'styled-components';

export const HouseRangkingWrap = styled.div`
  margin: 150px auto;
  width: 1024px;

  .loading_title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  & h1 {
    font-size: 32px;
    font-weight: 700;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 150px auto;
    width: 100%;
  }
`;

export const LocationWrap = styled.div`
  &::after {
    clear: both;
    content: '';
    display: block;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 10px;
  }
`;

export const ShopRangking = styled.div`
  margin-bottom: 16px;


  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 0px;

    & h1 {
      padding: 8px 24px;
      margin-bottom: 16px;
      font-size: 20px;
      float: left;
    }

    width: 100%:
    margin-bottom: 30px;
  }
`;

export const Location = styled.div`
  margin-bottom: 48px;
  float: right;

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`;

export const SelectWrap = styled.div`
  display: inline-block;
  float: left;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 40px;
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
    padding: 8px;
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
    position: absolute;
    top: 13px;
    right: 17px;
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
    padding-top: 18px;
    padding-bottom: 18px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 3px;
    max-height: 200px;
    overflow-y: auto;
  }

  li {
    text-align: center;
    width: 100%;
    line-height: 25px;
    margin: 0;
    margin-bottom: 10px;
    padding: 4px 0;
    color: #383838;
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
    border: 1px solid #383838;
  }

  label {
    width: 100%;
    display: block;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.device.mobile} {
    details {
      margin-right: -10px;
    }

    summary.radios {
      width: 65%;
    }

    ul {
      width: 87%;
    }

    summary:after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 14px;
      right: 55px;
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
    float: left;
  }

  & span {
    font-size: 16px;
    color: white;
    margin-left: 8px;
    display: block;
    float: left;
    padding: 2px 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    & button {
      padding: 6px 14px;
      background-color: #3d3d3d;
      cursor: pointer;
    }
    & span {
      font-size: 14px;
      color: white;
      margin-left: 8px;
      display: block;
      float: left;
      padding: 2px 0;
    }
  }
`;

export const LocationText = styled.div`
  padding: 12px 24px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 12px;
  }
`;

export const RangkingList = styled.div`
  width: 1024px;
  margin: 0 auto;

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
      position: relative;

      :nth-child(4) {
        margin-right: 0;
      }
      :nth-child(8) {
        margin-right: 0;
      }

      & .heart_image {
        position: absolute;
        width: 30px;
        height: 25px;
        top: 17px;
        right: 15px;
        cursor: pointer;
      }

      &:nth-child(4n) {
        margin-right: 0px;
      }
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;

    .list_wrap {
      padding: 0px 10px;
      margin-bottom: 15px;
      position: relative;
      width: 100%;
      margin: 0 auto;

      & li {
        margin-right: 2%;
        margin-bottom: 16px;
        width: 49%;

        &:nth-child(2n) {
          margin-right: 0px;
        }
      }
    }
  }
`;
