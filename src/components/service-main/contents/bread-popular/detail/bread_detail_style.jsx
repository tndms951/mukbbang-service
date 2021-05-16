import styled from 'styled-components';

export const BreadDtail = styled.div`
  width: 1024px;
  margin: 0 auto;

  & .title_wrap {
    margin-top: 150px;
    margin-bottom: 24px;
  }

  & .detail_text {
    width: 100%;
    display: block;
    text-align: center;
    color: #383838;
    font-size: 32px;
    font-weight: 700;
    padding: 8px 0px;
  }
  & .image_wrap {
    width: 640px;
    height: 248px;
    margin: 0 auto;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
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
  & p {
    width: 640px;
    margin: 24px auto;
    font-size: 18px;
    color: #383838;
  }
`;
