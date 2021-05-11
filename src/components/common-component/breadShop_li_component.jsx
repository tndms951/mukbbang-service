import React from 'react';
import PropTypes from 'prop-types';

import axios from '../../utils/axios';
import { errorhandler } from '../../utils/common';

const BreadShopLi = ({ shopList, shopImage, shopSeverLike, likeTrue, likeFalse, shopId, breadShopId }) => {
  const changeShopHeart = async () => {
    try {
      if (shopSeverLike) {
        const { status } = await axios.delete(`/bread/shop/favorite/${shopId}`);
        if (status === 200) {
          likeFalse(shopId);
        }
      } else {
        const { status: shopStatus } = await axios.post(`/bread/shop/favorite/${shopId}`);
        if (shopStatus === 200) {
          likeTrue(shopId);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <li>
      <img src={shopImage} alt={`${shopList.title}의 이미지`} />
      {breadShopId ? null : (
        <img
          src={shopSeverLike ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="좋아요하트이미지"
          className="heart_image"
          aria-hidden="true"
          onClick={changeShopHeart}
        />
      )}
      <dl>
        {breadShopId ? null : <dt>{shopList.address}</dt>}
        <dd>{shopList.title}</dd>
      </dl>
    </li>
  );
};

BreadShopLi.propTypes = {
  shopList: PropTypes.instanceOf(Object).isRequired,
  shopSeverLike: PropTypes.bool,
  likeTrue: PropTypes.func,
  likeFalse: PropTypes.func,
  shopId: PropTypes.number.isRequired,
  shopImage: PropTypes.string.isRequired,
  breadShopId: PropTypes.string
};

BreadShopLi.defaultProps = {
  shopSeverLike: undefined,
  likeTrue: undefined,
  likeFalse: undefined,
  breadShopId: undefined
};

export default BreadShopLi;
