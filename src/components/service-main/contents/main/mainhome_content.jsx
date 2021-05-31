/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { errorhandler } from '../../../../utils/common';
import BreadLi from '../../../common-component/bread_li_component';
import BreadShopLi from '../../../common-component/breadShop_li_component';

import { selectShopList } from '../../../redux/breadshop/list/breadShop.selectors';
import { setCurrentBreadShop, setShopTrueData, setShopFalseData } from '../../../redux/breadshop/list/breadShop.actions';

import { selectBreadList } from '../../../redux/bread/list/bread.selectors';
import { setBreadRankingList, setHeartTrueData, setHeartFalseData } from '../../../redux/bread/list/bread.actions';

import { selectEventSwiper } from '../../../redux/main/main.selectors';
import { setEventSwiper } from '../../../redux/main/main.actions';
import axios from '../../../../utils/axios';
import { Main, MainBackground, BreadShopRanking, BreadShopList } from './mainhome_content_style';

const MainHome = ({
  breadShopList,
  onBreadShopList,
  onBreadShopTrue,
  onBreadShopFalse,

  breadList,
  onBreadList,
  onBreadHeartTrue,
  onBreadHeartFalse,

  eventList,
  onEventList
}) => {
  useEffect(() => {
    async function fetchBreadData() {
      try {
        const { status, data: breadData } = await axios.get('/rank/bread');

        if (status === 200) {
          onBreadList(breadData.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    async function fetchEventBanner() {
      try {
        const { status, data: eventData } = await axios.get('/banner/event');

        if (status === 200) {
          onEventList(eventData.list);
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
    fetchEventBanner();
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
              <img src={listData.imageUrl} alt={listData.title} />
            ))}
          </Slider>
        </MainBackground>

        {/* 빵집!!! */}
        <BreadShopRanking>
          <h1>빵집 랭킹</h1>
          <div className="all_show">
            <Link to="/bread-house">
              <span>모두보기</span>
            </Link>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreadShopList>
          <ul className="list_wrap">
            {breadShopList.map((breadShopData) => (
              <BreadShopLi key={`breadShop_list-${breadShopData.id}`} shopList={breadShopData} shopSeverLike={breadShopData.like} shopId={breadShopData.id} likeTrue={onBreadShopTrue} likeFalse={onBreadShopFalse} />
            ))}
          </ul>
        </BreadShopList>
      </div>

      {/* 빵!!!!! */}
      <div className="breadRankingWrap">
        <BreadShopRanking>
          <h1>요즘 인기있는 빵 랭킹</h1>
          <div className="all_show">
            <Link to="/bread">
              <span>모두보기</span>
            </Link>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreadShopList>
          <ul className="list_wrap">
            {breadList.map((list) => (
              <BreadLi key={`bread_li_list-${list.id}`} likeTrue={onBreadHeartTrue} likeFalse={onBreadHeartFalse} breadList={list} />
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
  onBreadShopTrue: PropTypes.func.isRequired,
  onBreadShopFalse: PropTypes.func.isRequired,

  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onBreadHeartTrue: PropTypes.func.isRequired,
  onBreadHeartFalse: PropTypes.func.isRequired,

  eventList: PropTypes.instanceOf(Array).isRequired,
  onEventList: PropTypes.func.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadShopList: selectShopList,
  breadList: selectBreadList,
  eventList: selectEventSwiper
});

const breadShopDispathchToProps = (dispatch) => ({
  onBreadShopList: (breadShop) => dispatch(setCurrentBreadShop(breadShop)),
  onBreadShopTrue: (trueBreadShop) => dispatch(setShopTrueData(trueBreadShop)),
  onBreadShopFalse: (falseBreadShop) => dispatch(setShopFalseData(falseBreadShop)),

  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onBreadHeartTrue: (trueBreadId) => dispatch(setHeartTrueData(trueBreadId)),
  onBreadHeartFalse: (falseBreadId) => dispatch(setHeartFalseData(falseBreadId)),

  onEventList: (event) => dispatch(setEventSwiper(event))
});

export default connect(breadStateToProps, breadShopDispathchToProps)(MainHome);
