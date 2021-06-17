import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import axios from '../../utils/axios';
import { errorhandler } from '../../utils/common';
import { BreadliWrap } from './bread_li_style';
import { selectCurrentUser } from '../redux/user/user.selectors';

const BreadLi = ({ likeTrue, likeFalse, breadList, currentUser, location, history, breadListLike }) => {
  const changeBreadHeart = async () => {
    if (!currentUser) {
      const comeAddress = encodeURIComponent(location.pathname + location.search);
      history.push(`/signin?moveAddress=${comeAddress}`);
    } else {
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
    }
  };

  return (
    <BreadliWrap>
      <Link to={`/bread/detail/${breadList.id}`} key={`bread-list${breadList.id}`}>
        <div className="bread_image_wrap">
          <img src={breadList.image} alt={`${breadList.title}의 이미지`} />
        </div>
        <dl>
          <dd>{breadList.title}</dd>
        </dl>
      </Link>

      {breadListLike !== undefined ? (
        <img
          src={breadList.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="하트 이미지"
          className="heart_image"
          aria-hidden="true"
          onClick={changeBreadHeart}
        />
      ) : null}
    </BreadliWrap>
  );
};

BreadLi.defaultProps = {
  likeTrue: undefined,
  likeFalse: undefined,
  currentUser: null,
  location: undefined,
  history: undefined,
  breadListLike: undefined
};

BreadLi.propTypes = {
  likeTrue: PropTypes.func,
  likeFalse: PropTypes.func,
  breadList: PropTypes.instanceOf(Object).isRequired,
  currentUser: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  breadListLike: PropTypes.bool
};

const breadLiStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(breadLiStateToProps, null)(BreadLi);
