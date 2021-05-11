import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../utils/axios';

import { errorhandler } from '../../utils/common';

const BreadLi = ({ dataList, likeTrue, likeFalse, breadId, breadLike }) => {
  console.log(breadLike);
  const changeBreadHeart = async () => {
    try {
      if (breadLike === true) {
        const { status } = await axios.delete(`/bread/favorite/${breadId}`);
        if (status === 200) {
          likeFalse(breadId);
        }
      } else {
        const { status: breadStatus } = await axios.post(`/bread/favorite/${breadId}`);
        if (breadStatus === 200) {
          likeTrue(breadId);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <li>
      <img src={dataList.image} alt={`${dataList.title}의 이미지`} />

      {breadLike !== undefined ? (
        <img
          src={breadLike ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="하트 이미지"
          className="heart_image"
          aria-hidden="true"
          onClick={changeBreadHeart}
        />
      ) : null}

      <dl>
        <dd>{dataList.title}</dd>
      </dl>
    </li>
  );
};

BreadLi.propTypes = {
  dataList: PropTypes.instanceOf(Object).isRequired,
  likeTrue: PropTypes.func,
  likeFalse: PropTypes.func,
  breadId: PropTypes.number,
  breadLike: PropTypes.bool
};

BreadLi.defaultProps = {
  likeTrue: undefined,
  likeFalse: undefined,
  breadId: undefined,
  breadLike: undefined
};
export default BreadLi;
