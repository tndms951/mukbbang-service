import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

import { errorhandler } from '../../../../../utils/common';
import { HouseDetaile, Grade, ShopImage, Information, OtherBread, BreadShopList } from './breadShop_detail_style';
import axios from '../../../../../utils/axios';
import BreadLi from '../../../../common-component/bread_li_component';
import Review from '../../../../common-component/review/review';
import Comment from '../../../../common-component/comment/comment';
import { selectShopBread, selectShopImages, selectShopMenuImages, selectShopHolidays, selectShopAddress, selectShopInfo } from '../../../../redux/breadshop/detail/breadShopDetail.selectors';
import { setCurrentBreadShopDetail, setShopDetailTrue, setShopDetailFalse } from '../../../../redux/breadshop/detail/breadShopDetail.actions';
import LoadingHOC from '../../../../common-component/loadingHOC';

const ShopDetail = ({ shopDetailBread, shopDetailImages, shopDetailAddress, shopDetailInfo, onShopDetailBread, match, onDetailTrue, onDetailFalse, history, location, loading, isLoadingset }) => {
  const { breadShopId } = match.params;
  useEffect(() => {
    async function fetchDetailData() {
      isLoadingset(true);
      try {
        const { status, data: detaileData } = await axios.get(`/bread/shop/${breadShopId}`);
        if (status === 200) {
          onShopDetailBread(detaileData.data);
          isLoadingset(false);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    fetchDetailData();
  }, []);

  const onDetailHeart = async () => {
    try {
      if (shopDetailInfo.like) {
        const { status: detailStatus } = await axios.delete(`/bread/shop/favorite/${shopDetailInfo.id}`);
        if (detailStatus === 200) {
          onDetailFalse();
        }
      } else {
        const { status } = await axios.post(`/bread/shop/favorite/${shopDetailInfo.id}`);
        if (status === 200) {
          onDetailTrue();
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Helmet>
        <title>먹빵-우리동네빵집 빵집 디테일</title>
        <meta name="description" content="먹빵-우리동네빵집 빵집 디테일 페이지 입니다." />
        <meta property="og:title" content="먹빵-우리동네빵집 빵집 디테일 페이지 입니다." />
        <meta property="og:description" content="먹빵-우리동네빵집 빵집 디테일 페이지 입니다." />
        <meta property="og:image" content="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/logo/logo.png" />
      </Helmet>
      {!loading && (
        <HouseDetaile>
          <Grade>
            <h1>{shopDetailInfo?.title}</h1>

            <img
              src={shopDetailInfo?.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
              alt="빈하트 이미지"
              onClick={onDetailHeart}
              aria-hidden="true"
            />
          </Grade>
          <ShopImage>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              {shopDetailImages.map((images, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <img src={images} alt={`빵집사진-${index}`} key={`bread-image-${index}`} />
              ))}
            </Slider>
            <Information>
              <div>주소</div>
              <p>{shopDetailAddress?.address || ''}</p>
            </Information>
            <Information>
              <div>전화번호</div>
              <p>{shopDetailInfo?.storeNumber || ''}</p>
            </Information>
            <Information>
              <div>주차</div>
              {/* eslint-disable-next-line no-nested-ternary */}
              <p>{shopDetailInfo ? (shopDetailInfo.parkongEnabled ? '가능' : '불가능') : ''}</p>
            </Information>
            <Information>
              <div>영업시간</div>
              <p>{shopDetailInfo?.openTime || ''}</p>
            </Information>
            <Information>
              <div>홈페이지</div>
              <p>
                <a href={shopDetailInfo?.link} target="_blank" rel="noreferrer">
                  {shopDetailInfo?.link || ''}
                </a>
              </p>
            </Information>
          </ShopImage>
          <Review match={match.params} shopDetailInfo={shopDetailInfo} />
          <Comment match={match.params} type="breadHouseType" history={history} location={location} />

          <OtherBread>
            <h1>빵</h1>
            <div className="all_show">
              <Link to="/bread">
                <span>모두보기</span>
              </Link>
              <span className="triangle" />
            </div>
          </OtherBread>
          <BreadShopList>
            <ul className="list_wrap">
              {shopDetailBread.map((breadShopData) => (
                <BreadLi key={`bread_shop_list${breadShopData.id}`} breadList={breadShopData} />
              ))}
            </ul>
          </BreadShopList>
        </HouseDetaile>
      )}
    </>
  );
};

ShopDetail.propTypes = {
  shopDetailBread: PropTypes.instanceOf(Array).isRequired,
  onShopDetailBread: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailImages: PropTypes.instanceOf(Array).isRequired,
  shopDetailAddress: PropTypes.instanceOf(Object),
  shopDetailInfo: PropTypes.instanceOf(Object),
  onDetailTrue: PropTypes.func.isRequired,
  onDetailFalse: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  isLoadingset: PropTypes.func.isRequired
};

// 초기값이 없거나 null인 경우 예외처리
ShopDetail.defaultProps = {
  shopDetailAddress: null,
  shopDetailInfo: null
};

const breadShopStateToProps = createStructuredSelector({
  shopDetailBread: selectShopBread,
  shopDetailImages: selectShopImages,
  shopDetailMenuImages: selectShopMenuImages,
  shopDetailHolidays: selectShopHolidays,
  shopDetailAddress: selectShopAddress,
  shopDetailInfo: selectShopInfo
});

const breadShopDetaileDispathch = (dispatch) => ({
  onShopDetailBread: (DetailList) => dispatch(setCurrentBreadShopDetail(DetailList)),
  onDetailTrue: () => dispatch(setShopDetailTrue()),
  onDetailFalse: () => dispatch(setShopDetailFalse())
});

export default connect(breadShopStateToProps, breadShopDetaileDispathch)(LoadingHOC(ShopDetail, <div className="loading_title">빵집 상세 페이지 입니다.</div>));
