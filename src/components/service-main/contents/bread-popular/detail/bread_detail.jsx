import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

import { errorhandler } from 'utils/common';
import { BreadDtail, AllWrap } from './bread_detail_style';
import Comment from '../../../../common-component/comment/comment';
import { setCurrentBreadList, setBreadDetailTrue, setBreadDetailFalse } from '../../../../redux/bread/detail/breadDetail.actions';
import { selectBreadInfo, selectBreadImages } from '../../../../redux/bread/detail/breadDetail.selectors';
import axios from '../../../../../utils/axios';
import LoadingHOC from '../../../../common-component/loadingHOC';

const BreadDetail = ({ match, breadDetailInfo, onBreadDetail, breadDetailImages, onBreadDetailTrue, onBreadDetailFalse, isLoadingset, loading }) => {
  const { breadId } = match.params;
  useEffect(() => {
    async function fetchBreadDetail() {
      isLoadingset(true);
      try {
        const { data, status } = await axios.get(`bread/${breadId}`);
        if (status === 200) {
          onBreadDetail(data.data);
          isLoadingset(false);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchBreadDetail();
  }, []);

  // 하트 클릭
  const onDetailHeart = async () => {
    try {
      if (breadDetailInfo?.like) {
        const { status } = await axios.delete(`/bread/favorite/${breadId}`);
        if (status === 200) {
          onBreadDetailFalse();
        }
      } else {
        const { status: breadStatus } = await axios.post(`/bread/favorite/${breadId}`);
        if (breadStatus === 200) {
          onBreadDetailTrue();
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Helmet>
        <title>먹빵-우리동네빵집 인기있는 빵 디테일</title>
        <meta name="description" content="먹빵-우리동네빵집 인기있는 빵 디테일 페이지 입니다." />
        <meta property="og:title" content="먹빵-우리동네빵집 인기있는 빵 디테일 페이지 입니다." />
        <meta property="og:description" content="먹빵-우리동네빵집 인기있는 빵 디테일 페이지 입니다." />
        <meta property="og:image" content="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/logo/logo.png" />
      </Helmet>
      {!loading && (
        <BreadDtail>
          <AllWrap>
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
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {breadDetailImages.map((images, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="image_wrap" key={`bread-images-${index}`}>
                  <img src={images} alt={`빵사진-${index}`} />
                </div>
              ))}
            </Slider>

            <span className="detail_bread_name">{breadDetailInfo ? breadDetailInfo.title : ''}</span>
            <p className="content_text">{breadDetailInfo?.content}</p>
          </AllWrap>
          <Comment match={match.params} type="breadType" />
        </BreadDtail>
      )}
    </>
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
  breadDetailImages: PropTypes.instanceOf(Array),
  onBreadDetailTrue: PropTypes.func.isRequired,
  onBreadDetailFalse: PropTypes.func.isRequired,
  isLoadingset: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadDetailInfo: selectBreadInfo,
  breadDetailImages: selectBreadImages
});
const breadDetaileDispathch = (dispatch) => ({
  onBreadDetail: (breadDetailList) => dispatch(setCurrentBreadList(breadDetailList)),
  onBreadDetailTrue: () => dispatch(setBreadDetailTrue()),
  onBreadDetailFalse: () => dispatch(setBreadDetailFalse())
});

export default connect(breadStateToProps, breadDetaileDispathch)(LoadingHOC(BreadDetail, <div className="loading_title">인기있는 빵 디테일 페이지 입니다.</div>));
