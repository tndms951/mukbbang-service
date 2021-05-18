import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { errorhandler } from 'utils/common';
import { BreadDtail } from './bread_detail_style';
import Comment from '../../../../common-component/comment/comment';
import { setCurrentBreadList } from '../../../../redux/bread/detail/breadDetail.actions';
import { selectBreadInfo, selectBreadImages } from '../../../../redux/bread/detail/breadDetail.selectors';

import axios from '../../../../../utils/axios';

const BreadDetail = ({ match, breadDetailInfo, onBreadDetail, breadDetailImages }) => {
  console.log(breadDetailInfo);
  console.log(breadDetailImages);
  const { breadId } = match.params;

  useEffect(() => {
    async function fetchBreadDetail() {
      try {
        const { data, status } = await axios.get(`bread/${breadId}`);
        console.log(data);
        if (status === 200) {
          onBreadDetail(data.data);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchBreadDetail();
  }, []);

  const onDetailHeart = () => {
    console.log('aaaaa');
  };
  return (
    <BreadDtail>
      <div className="title_wrap">
        <span className="detail_text">{breadDetailInfo?.title}</span>
        <div className="heartImage">
          <img
            src={breadDetailInfo?.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
            alt="빈하트 이미지"
            onClick={onDetailHeart}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="image_wrap">
        <img src={breadDetailInfo?.image} alt="" />
      </div>

      <span className="detail_bread_name">{breadDetailInfo ? breadDetailInfo.title : ''}</span>
      <p className="content_text">{breadDetailInfo?.content}</p>
      <Comment match={match.params} type="breadType" />
    </BreadDtail>
  );
};
BreadDetail.defaultProps = {
  breadDetailInfo: null,
  breadDetailImages: null
};

BreadDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  breadDetailInfo: PropTypes.instanceOf(Object),
  onBreadDetail: PropTypes.func.isRequired,
  breadDetailImages: PropTypes.instanceOf(Array)
};

const breadStateToProps = createStructuredSelector({
  breadDetailInfo: selectBreadInfo,
  breadDetailImages: selectBreadImages
});
const breadDetaileDispathch = (dispatch) => ({
  onBreadDetail: (breadDetailList) => dispatch(setCurrentBreadList(breadDetailList))
});

export default connect(breadStateToProps, breadDetaileDispathch)(BreadDetail);
