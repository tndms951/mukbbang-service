import styled from 'styled-components';

export const BreadDtail = styled.div`
  width: 1024px;
  margin: 0 auto;

  & .title_wrap {
    margin-top: 150px;
    margin-bottom: 24px;
    margin-left: 190px;

    &::after {
      clear: both;
      content: '';
      display: block;
    }
  }

  & .detail_text {
    width: 225px;
    margin: 0 auto;
    display: block;
    color: #383838;
    font-size: 32px;
    font-weight: 700;
    float: left;
    padding: 8px 0px;
  }

  & .heartImage {
    width: 30px;
    float: right;
  }

  & .heartImage > img {
    width: 100%;
    line-height: 100px;
    margin-top: 10px;
  }

  & .image_wrap {
    width: 640px;
    height: 248px;
    margin: 0 auto;

    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  & .detail_bread_name {
    display: block;
    width: 640px;
    color: #383838;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;
  }
  & .content_text {
    width: 640px;
    margin: 24px auto;
    font-size: 18px;
    color: #383838;
  }
`;
