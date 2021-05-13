import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import axios from '../../utils/axios';
import { errorhandler } from '../../utils/common';
import { BreadliWrap } from './bread_li_style';

const BreadLi = ({ likeTrue, likeFalse, breadList }) => {
  const changeBreadHeart = async () => {
    try {
      if (breadList.like === true) {
        const { status } = await axios.delete(`/bread/favorite/${breadList.id}`);
        if (status === 200) {
          likeFalse(breadList.id);
        }
      } else {
        const { status: breadStatus } = await axios.post(`/bread/favorite/${breadList.id}`);
        if (breadStatus === 200) {
          likeTrue(breadList.id);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <BreadliWrap>
      <Link to={`/rank/bread/detail/${breadList.id}`} key={`bread-list${breadList.id}`}>
        <span className="bread_image_wrap">
          <img src={breadList.image} alt={`${breadList.title}의 이미지`} />
        </span>

        <dl>
          <dd>{breadList.title}</dd>
        </dl>
      </Link>

      {breadList.like !== undefined ? (
        <span className="heart_wrap">
          <img
            src={breadList.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
            alt="하트 이미지"
            className="heart_image"
            aria-hidden="true"
            onClick={changeBreadHeart}
          />
        </span>
      ) : null}
    </BreadliWrap>
  );
};

BreadLi.propTypes = {
  likeTrue: PropTypes.func,
  likeFalse: PropTypes.func,
  breadList: PropTypes.instanceOf(Object).isRequired
};

BreadLi.defaultProps = {
  likeTrue: undefined,
  likeFalse: undefined
};
export default BreadLi;
