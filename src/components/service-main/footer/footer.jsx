import React from 'react';
import { FooterWarp, SnsIcon, CorpArea } from './footer_style';

const Footer = () => (
  <FooterWarp>
    <SnsIcon>
      <ul>
        <li>
          <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/facebook.png" alt="페이스북 아이콘" />
        </li>
        <li>
          <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/insta.png" alt="인스타그램 아이콘" />
        </li>
        <li>
          <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/youtube.png" alt="유튜브 아이콘" />
        </li>
        <li>
          <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/linkedin.png" alt="링크드인 아이콘" />
        </li>
        <li>
          <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/blog.png" alt="네이버블로그 아이콘" />
        </li>
      </ul>
    </SnsIcon>

    <CorpArea>
      <ul>
        <li>​©2021 SONG JISU</li>
        <li>
          <div className="footer_image_wrap">
            <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/Shape.png" alt="이메일 이미지" className="email_img" />
          </div>
          <span>tndms9504@gmail.com</span>
        </li>
      </ul>
    </CorpArea>
  </FooterWarp>
);

export default Footer;
