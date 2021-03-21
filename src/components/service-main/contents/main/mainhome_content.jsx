import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { errorhandler } from '../../../../utils/common';

import { selectShopList } from '../../../redux/breadshoplist/breadShop.selectors';
import { setCurrentBreadShop } from '../../../redux/breadshoplist/breadShop.actions';

import { selectBreadList } from '../../../redux/breadlist/bread.selectors';
import { setBreadRankingList, setHeartTrueData } from '../../../redux/breadlist/bread.actions';

import axios from '../../../../utils/axios';
import { Main, MainBackground, BreadShopRanking, BreaShopList } from './mainhome_content_style';

const MainHome = ({ breadShopList, onBreadShopList, breadList, onBreadList, onHeartFilled }) => {
  console.log(onHeartFilled);

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

  return (
    <Main>
      <div className="breadShopWrap">
        <MainBackground>
          <img src="" alt="" />
        </MainBackground>

        <BreadShopRanking>
          <h1>빵집 랭킹</h1>
          <div className="all_show">
            <span>모두보기</span>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreaShopList>
          <ul className="list_wrap">
            {breadShopList.map((breadShopData) => (
              <li key={breadShopData.id}>
                <img src={breadShopData.image} alt={breadShopData.title} />
                <dl>
                  <dt>{breadShopData.address}</dt>
                  <dd>{breadShopData.title}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </BreaShopList>
      </div>

      <div className="breadRankingWrap">
        <BreadShopRanking>
          <h1>요즘 인기있는 빵 랭킹</h1>
          <div className="all_show">
            <span>모두보기</span>
            <span className="triangle" />
          </div>
        </BreadShopRanking>

        <BreaShopList>
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
        </BreaShopList>
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