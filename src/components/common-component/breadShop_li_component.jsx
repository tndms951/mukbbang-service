import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { ShopliWrap } from './breadShop_li_style';
import axios from '../../utils/axios';
import { errorhandler } from '../../utils/common';
import { selectCurrentUser } from '../redux/user/user.selectors';

const BreadShopLi = ({ shopList, shopSeverLike, likeTrue, likeFalse, shopId, currentUser, location, history }) => {
  const changeShopHeart = async () => {
    if (!currentUser) {
      const comeAddress = encodeURIComponent(location.pathname + location.search);
      history.push(`/signin?moveAddress=${comeAddress}`);
    } else {
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
        console.log(err);
      }
    }
  };

  return (
    <ShopliWrap>
      <Link to={`/bread-house/detail/${shopId}`}>
        <div className="image_wrap">
          <img src={shopList.image} alt={`${shopList.title}의 이미지`} />
        </div>
        <dl>
          {shopId ? <dt>{shopList.address}</dt> : null}
          <dd>{shopList.title}</dd>
        </dl>
      </Link>

      {shopId ? (
        <img
          src={shopSeverLike ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="하트 이미지"
          className="heart_image"
          aria-hidden="true"
          onClick={changeShopHeart}
        />
      ) : null}
    </ShopliWrap>
  );
};

BreadShopLi.defaultProps = {
  shopSeverLike: undefined,
  likeTrue: undefined,
  likeFalse: undefined,
  currentUser: null,
  history: undefined,
  location: undefined
};

BreadShopLi.propTypes = {
  shopList: PropTypes.instanceOf(Object).isRequired,
  shopSeverLike: PropTypes.bool,
  likeTrue: PropTypes.func,
  likeFalse: PropTypes.func,
  shopId: PropTypes.number.isRequired,
  currentUser: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object)
};

const shopLiStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(shopLiStateToProps, null)(BreadShopLi);
