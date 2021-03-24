/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { errorhandler } from '../../../../utils/common';
import BreadLi from '../../../common-component/bread_li_component';

import { selectShopList } from '../../../redux/breadshoplist/breadShop.selectors';
import { setCurrentBreadShop } from '../../../redux/breadshoplist/breadShop.actions';

import { selectBreadList } from '../../../redux/breadlist/bread.selectors';
import { setBreadRankingList, setHeartTrueData } from '../../../redux/breadlist/bread.actions';

import { selectEventSwiper } from '../../../redux/main/main.selectors';
import { setEventSwiper } from '../../../redux/main/main.actions';

import axios from '../../../../utils/axios';
import { Main, MainBackground, BreadShopRanking, BreadShopList } from './mainhome_content_style';

const MainHome = ({
  breadShopList,
  onBreadShopList,
  breadList,
  onBreadList,
  onBreadHeartTrue,
  eventList,
  onEventList
}) => {
  // console.log(breadList);
  // console.log(onBreadList);
  // console.log(onBreadHeartTrue);

  const [aaa, setAaa] = useState(false);
  console.log(setAaa);

  useEffect(() => {
    async function fetchBreadData() {
      try {
        const { status, data: breadData } = await axios.get('/rank/bread');
        const { data: eventData } = await axios.get('/banner/event');
        console.log(eventData);

        if (status === 200) {
          onBreadList(breadData.list);
          onEventList(eventData.list);
          // onBreadHeartTrue();
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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Main>
      <div>
        <MainBackground>
          <Slider {...settings}>
            {eventList.map((listData) => (
              <img src={listData.imageUrl} alt="ss" />
            ))}
          </Slider>
        </MainBackground>

        {/* 빵집!!! */}
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
              <li key={`breadShop${breadShopData.id}`}>
                <img src={breadShopData.image} alt={`${breadShopData.title}의 이미지`} />
                {aaa ? (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
                    alt="빈하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
                    active
                  />
                ) : (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png"
                    alt="빨간하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
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

      {/* 빵!!!!! */}
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
            {breadList.map((list) => (
              <BreadLi
                key={`bread_li_list${list.id}`}
                dataList={list}
                likeTrue={onBreadHeartTrue}
              />
            ))}
          </ul>
        </BreadShopList>

        {/* <BreadShopList>
          <ul className="list_wrap">
            {breadList.map((breadData) => (
              <li key={`bread-list${breadData.id}`}>
                <img src={breadData.image} alt={`${breadData.title}의 이미지`} />
                {onBreadHeartTrue ? (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
                    alt="빈하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
                    onClick={changeBreadHeart}
                    active
                  />
                ) : (
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png"
                    alt="빨간하트 이미지"
                    className="heart_image"
                    aria-hidden="true"
                    onClick={changeBreadHeart}
                    active
                  />
                )}
                <dl>
                  <dd>{breadData.title}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </BreadShopList> */}
      </div>
    </Main>
  );
};

MainHome.propTypes = {
  breadShopList: PropTypes.instanceOf(Array).isRequired,
  onBreadShopList: PropTypes.func.isRequired,
  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onBreadHeartTrue: PropTypes.func.isRequired,
  eventList: PropTypes.instanceOf(Array).isRequired,
  onEventList: PropTypes.func.isRequired
  // match: PropTypes.func.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadShopList: selectShopList,
  breadList: selectBreadList,
  eventList: selectEventSwiper
});

const breadShopDispathchToProps = (dispatch) => ({
  onBreadShopList: (breadShop) => dispatch(setCurrentBreadShop(breadShop)),
  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onBreadHeartTrue: (trueBreadId) => dispatch(setHeartTrueData(trueBreadId)),
  onEventList: (event) => dispatch(setEventSwiper(event))
});

export default connect(breadStateToProps, breadShopDispathchToProps)(MainHome);
