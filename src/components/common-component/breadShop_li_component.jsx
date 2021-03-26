import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../utils/axios';

import { errorhandler } from '../../utils/common';

const BreadShopLi = ({ ShopList, ShopSeverLike, likeTrue, likeFalse, ShopId }) => {
  // console.log(ShopSeverLike);
  // console.log(ShopId);
  // console.log(likeTrue);

  const changeShopHeart = async () => {
    try {
      if (ShopSeverLike) {
        const { status } = await axios.delete(`/bread/shop/favorite/${ShopId}`);
        if (status === 200) {
          likeFalse(ShopId);
        }
      } else {
        const { status: shopStatus } = await axios.post(`/bread/shop/favorite/${ShopId}`);
        if (shopStatus === 200) {
          likeTrue(ShopId);
        }
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  return (
    <li>
      <img src={ShopList.image} alt={`${ShopList.title}의 이미지`} />
      <img
        src={
          ShopSeverLike
            ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png'
            : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'
        }
        alt="빈하트 이미지"
        className="heart_image"
        aria-hidden="true"
        onClick={changeShopHeart}
        // active="true"
      />
      <dl>
        <dt>{ShopList.address}</dt>
        <dd>{ShopList.title}</dd>
      </dl>
    </li>
  );
};

BreadShopLi.propTypes = {
  ShopList: PropTypes.instanceOf(Object).isRequired,
  ShopSeverLike: PropTypes.bool.isRequired,
  likeTrue: PropTypes.func.isRequired,
  likeFalse: PropTypes.func.isRequired,
  ShopId: PropTypes.number.isRequired
};

export default BreadShopLi;
