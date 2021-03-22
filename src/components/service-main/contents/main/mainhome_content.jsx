/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { errorhandler } from '../../../../utils/common';

import { selectShopList } from '../../../redux/breadshoplist/breadShop.selectors';
import { setCurrentBreadShop } from '../../../redux/breadshoplist/breadShop.actions';

import { selectBreadList } from '../../../redux/breadlist/bread.selectors';
import { setBreadRankingList, setHeartTrueData } from '../../../redux/breadlist/bread.actions';

import axios from '../../../../utils/axios';
import {
  Main,
  MainBackground,
  BreadShopRanking,
  BreadShopList,
  eventSwiper
} from './mainhome_content_style';

const MainHome = ({ breadShopList, onBreadShopList, breadList, onBreadList, onHeartFilled }) => {
  console.log(onHeartFilled); // 값 처리하기

  const [onHeart, setOnHeart] = useState(false);

  useEffect(() => {
    async function fetchBreadData() {
      try {
        const { status, data: breadData } = await axios.get('/rank/bread');
        console.log(breadData);
        console.log(breadData.list[3].like);
        console.log(breadData);

        if (status === 200) {
          onBreadList(breadData.list);
          setOnHeart(onHeart);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    async function fetchBreadShopData() {
      try {
        const { status, data: breadShopData } = await axios.get('/rank/bread/shop');
        if (status === 200) {
          onBreadShopList(breadShopData.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchBreadData();
    fetchBreadShopData();
  }, []);

  const changeHeart = async () => {
    const { status } = await axios.post('/bread/favorite/{breadId}');
    if (status === 200) {
      setOnHeart(!onHeart);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Main>
      <div>
        <eventSwiper>
          <Slider {...settings}>
            <MainBackground>
              <div>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                  alt=""
                />
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                  alt=""
                />
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                  alt=""
                />
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                  alt=""
                />
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/google.png"
                  alt=""
                />
              </div>
            </MainBackground>
          </Slider>
        </eventSwiper>

        <BreadShopRanking>
          <h1>빵집 랭킹</h1>
          <div className="all_show">
            <span>모두보기</span>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreadShopList>
          <ul className="list_wrap">
            {breadShopList.map((breadShopData) => (
              <li key={breadShopData.id}>
                <img src={breadShopData.image} alt={`${breadShopData.title}의 이미지`} />
                {onHeart ? (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
                    alt="빈하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
                    onClick={changeHeart}
                    active
                  />
                ) : (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png"
                    alt="빨간하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
                    onClick={changeHeart}
                    active
                  />
                )}
                <dl>
                  <dt>{breadShopData.address}</dt>
                  <dd>{breadShopData.title}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </BreadShopList>
      </div>

      <div className="breadRankingWrap">
        <BreadShopRanking>
          <h1>요즘 인기있는 빵 랭킹</h1>
          <div className="all_show">
            <span>모두보기</span>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreadShopList>
          <ul className="list_wrap">
            {breadList.map((breadData) => (
              <li key={breadData.id}>
                <img src={breadData.image} alt="" />
                <dl>
                  <dd>{breadData.title}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </BreadShopList>
      </div>
    </Main>
  );
};

MainHome.propTypes = {
  breadShopList: PropTypes.instanceOf(Array).isRequired,
  onBreadShopList: PropTypes.func.isRequired,
  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onHeartFilled: PropTypes.func.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadShopList: selectShopList,
  breadList: selectBreadList
});

const breadShopDispathchToProps = (dispatch) => ({
  onBreadShopList: (breadShop) => dispatch(setCurrentBreadShop(breadShop)),
  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onHeartFilled: (filled) => dispatch(setHeartTrueData(filled))
});

export default connect(breadStateToProps, breadShopDispathchToProps)(MainHome);
