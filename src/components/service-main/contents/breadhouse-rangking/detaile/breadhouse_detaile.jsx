import React from 'react';
import { HouseDetaile, Grade, ShopImage, Information } from './breadhouse_detaile_style';

const ShopDetaile = () => {
  console.log('디테일');
  return (
    <>
      <HouseDetaile>
        <Grade>
          <h1>
            빵집 이름 <span className="text_color">(평점)</span>
          </h1>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
            alt="빈하트 이미지"
          />
        </Grade>
        <ShopImage>
          <span />

          <Information>
            <div>주소</div>
            <p>Description</p>
          </Information>
        </ShopImage>
      </HouseDetaile>
    </>
  );
};

export default ShopDetaile;
