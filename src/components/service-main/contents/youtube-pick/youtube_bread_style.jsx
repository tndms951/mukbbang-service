import styled from 'styled-components';

export const BreadPickWrap = styled.div`
  margin: 104px auto;
  max-width: 1024px;

  .loading_title {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`;

export const YoutubePickEvent = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    & img {
      width: 100%;
    }
  }
`;

export const PickBreadTitle = styled.div`
  margin-top: 72px;
  margin-bottom: 24px;
  padding: 8px 24px;

  & span {
    font-size: 22px;
    font-weight: 600;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 10px;
  }
`;

export const StyledSlider = styled.div`
  padding: 0 24px;

  & .infinite-scroll-component {
    overflow: hidden !important;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 10px;
  }
`;

export const PickBreadOdd = styled.div`
  width: 100%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .VideoContainer {
    width: 450px;
    float: left;
    margin-right: 40px;
  }

  & .pick_title {
    width: 383px;
    float: right;
    margin-top: 70px;
    margin-left: 40px;

    & span {
      display: block;
    }

    & span:nth-child(1) {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    & span:nth-child(2) {
      margin-bottom: 25px;
      font-size: 16px;
    }

    .show_button {
      padding: 8px 24px;
      background: white;
      border: 1px solid #383838;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    & a {
      color: #383838;
      text-decoration: none;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 40px;

    & .VideoContainer {
      width: 100%;

      & iframe {
        width: 100% !important;
        height: 50vw;
      }
    }

    & .pick_title {
      width: 100%;
      margin: 20px 0px;
      text-align: center;

      & span:nth-child(1) {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      & span:nth-child(2) {
        margin-bottom: 20px;
        font-size: 14px;
      }

      .show_button {
        padding: 5px 20px;
        background: white;
        border: 1px solid #383838;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;

export const PickBreadEven = styled.div`
  width: 100%;
  margin: 74px 0px;

  &::after {
    clear: both;
    content: '';
    display: block;
  }

  & .VideoContainer_even {
    width: 450px;
    height: auto;
  }

  & .pick_title_even {
    float: left;
    width: 383px;
    margin-top: 70px;
    margin-right: 40px;

    & span {
      display: block;
    }

    & span:nth-child(1) {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    & span:nth-child(2) {
      margin-bottom: 25px;
      font-size: 16px;
    }

    & .show_button_even {
      padding: 8px 24px;
      background: white;
      border: 1px solid #383838;
      font-size: 16px;
      font-weight: 700;
      color: #383838;
      cursor: pointer;
    }

    & a {
      color: #383838;
      text-decoration: none;
    }
  }

  & .VideoContainer_even {
    float: right;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 40px;
    margin-top: 0px;
    margin-left: 0px;

    & .VideoContainer_even {
      width: 100%;
      float: none;

      & iframe {
        width: 100% !important;
        height: 50vw;
      }
    }

    & .pick_title_even {
      width: 100%;
      margin: 20px 0px;
      text-align: center;

      & span:nth-child(1) {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      & span:nth-child(2) {
        margin-bottom: 20px;
        font-size: 14px;
      }

      .show_button {
        padding: 5px 20px;
        background: white;
        border: 1px solid #383838;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
`;
