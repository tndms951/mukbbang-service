/* eslint-disable react/no-array-index-key */
// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { errorhandler } from '../../../../../utils/common';

import { HouseDetaile, Grade, ShopImage, Information, OtherBread, BreadShopList } from './breadShop_detail_style';
import axios from '../../../../../utils/axios';
import BreadShopLi from '../../../../common-component/breadShop_li_component';
import Review from '../../../../common-component/review/review';
import Comment from '../../../../common-component/comment/comment';

import { selectShopBread, selectShopImages, selectShopMenuImages, selectShopHolidays, selectShopAddress, selectShopInfo } from '../../../../redux/breadshop/detail/breadShopDetail.selectors';
import { setCurrentBreadShopDetail, setShopDetailTrue, setShopDetailFalse } from '../../../../redux/breadshop/detail/breadShopDetail.actions';
import { selectShopReview } from '../../../../redux/breadshop/review/review.selectors';
import { setBreadShopReview } from '../../../../redux/breadshop/review/review.actions';
import { selectShopComment } from '../../../../redux/breadshop/comment/breadShopComment.selectors';
import { setShopDetailComment } from '../../../../redux/breadshop/comment/breadShopComment.actions';

// eslint-disable-next-line no-unused-vars
const ShopDetail = ({ shopDetailBread, shopDetailImages, shopDetailAddress, shopDetailInfo, onShopDetailBread, match, onDetailTrue, onDetailFalse, onDetailReview, shopDetailReview, shopDetailComment }) => {
  console.log(shopDetailBread);
  // console.log(shopDetailImages);
  console.log(shopDetailInfo);
  // console.log(shopDetailAddress);
  // console.log(shopDetailReview);
  // console.log(onDetailWriting);
  // console.log(shopwritingReview);
  console.log(shopDetailReview);
  console.log(shopDetailComment);
  console.log(shopDetailInfo?.title);

  useEffect(() => {
    async function fetchDetailData() {
      try {
        const { breadShopId } = match.params;
        console.log(breadShopId);

        const { status, data: detaileData } = await axios.get(`/bread/shop/${breadShopId}`);
        console.log(detaileData);
        console.log(detaileData.data.id);
        if (status === 200) {
          onShopDetailBread(detaileData.data);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    async function fetchDetailReview() {
      try {
        const { breadShopId } = match.params;
        const { status, data } = await axios.get(`/review/${breadShopId}`);
        if (status === 200) {
          onDetailReview(data.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchDetailData();
    fetchDetailReview();
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

  return (
    <HouseDetaile>
      <Grade>
        <h1>
          빵집 이름 <span className="text_color">(평점)</span>
        </h1>

        <img
          src={shopDetailInfo?.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="빈하트 이미지"
          onClick={onDetailHeart}
          aria-hidden="true"
        />
      </Grade>
      <ShopImage>
        <img src={shopDetailImages} alt="" />
        <Information>
          <div>주소</div>
          <p>{shopDetailAddress ? shopDetailAddress.address : ''}</p>
        </Information>
        <Information>
          <div>전화번호</div>
          <p>{shopDetailInfo ? shopDetailInfo.storeNumber : ''}</p>
        </Information>
        <Information>
          <div>주차</div>
          {/* eslint-disable-next-line no-nested-ternary */}
          <p>{shopDetailInfo ? (shopDetailInfo.parkongEnabled ? '가능' : '불가능') : ''}</p>
        </Information>
        <Information>
          <div>영업시간</div>
          <p>{shopDetailInfo ? shopDetailInfo.openTime : ''}</p>
        </Information>
        <Information>
          <div>홈페이지</div>
          <p>{shopDetailInfo ? shopDetailInfo.link : ''}</p>
        </Information>
      </ShopImage>

      <Review breadShopId={shopDetailInfo?.id} ShopDetailList={shopDetailInfo} shopDetailReview={shopDetailReview} />

      <Comment breadShopId={shopDetailInfo?.id} ShopDetailList={shopDetailInfo} />

      <OtherBread>
        <h1>빵 랭킹</h1>
        <div className="all_show">
          <span>모두보기</span>
          <span className="triangle" />
        </div>
      </OtherBread>

      <BreadShopList>
        <ul className="list_wrap">
          {shopDetailBread.map((breadShopData) => (
            <BreadShopLi key={`bread_shop_list${breadShopData.id}`} shopList={breadShopData} shopImage={breadShopData.image} shopSeverLike={breadShopData.like} shopId={breadShopData.id} />
          ))}
        </ul>
      </BreadShopList>
    </HouseDetaile>
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
  onDetailReview: PropTypes.instanceOf(Object).isRequired,
  shopDetailReview: PropTypes.instanceOf(Array).isRequired,
  shopDetailComment: PropTypes.instanceOf(Object).isRequired
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
  shopDetailInfo: selectShopInfo,
  shopDetailReview: selectShopReview,
  shopDetailComment: selectShopComment
});

const breadShopDetaileDispathch = (dispatch) => ({
  onShopDetailBread: (DetailList) => dispatch(setCurrentBreadShopDetail(DetailList)),
  onDetailTrue: () => dispatch(setShopDetailTrue()),
  onDetailFalse: () => dispatch(setShopDetailFalse()),
  onDetailReview: (review) => dispatch(setBreadShopReview(review)),
  onDetailComment: (comment) => dispatch(setShopDetailComment(comment))
});

export default connect(breadShopStateToProps, breadShopDetaileDispathch)(ShopDetail);
