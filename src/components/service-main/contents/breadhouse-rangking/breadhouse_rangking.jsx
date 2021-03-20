import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

import { selectShopList } from '../../../redux/breadshoplist/breadShop.selectors';
import { setCurrentBreadShop } from '../../../redux/breadshoplist/breadShop.actions';

import {
  HouseRangkingWrap,
  ShopRangking,
  Location,
  SelectWrap,
  City,
  CurrentLocation,
  RangkingList
} from './breadhouse_rangking_style';

// 하트 액션
import { setHeartTrueData } from '../../../redux/breadlist/bread.actions';

const HouseRangking = ({ breadShopList, onbreadShopList, onheartspace }) => {
  useEffect(() => {
    async function fetchShopData() {
      try {
        const { data: breadShopData } = await axios.get('/bread/shop');

        onbreadShopList(breadShopData.list);
        onheartspace(breadShopData.like);
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchShopData();
  }, []);

  const changeHeart = () => {
    alert('하투하투');
  };

  return (
    <HouseRangkingWrap>
      <ShopRangking>
        <h1>빵집 랭킹</h1>
      </ShopRangking>

      <Location>
        <SelectWrap>
          <City>
            <details className="custom-select">
              <summary className="radios">
                <input type="radio" name="city" id="default" title="시.도" checked />
                <input type="radio" name="city" id="city1" title="서울특별시" />
                <input type="radio" name="city" id="city2" title="경기도" />
                <input type="radio" name="city" id="city3" title="대전광역시" />
                <input type="radio" name="city" id="city4" title="대구광역시" />
                <input type="radio" name="city" id="city5" title="부산광역시" />
              </summary>
              <ul className="list">
                <li>
                  <label htmlFor="city1">서울특별시</label>
                </li>
                <li>
                  <label htmlFor="city2">경기도</label>
                </li>
                <li>
                  <label htmlFor="city3">대전광역시</label>
                </li>
                <li>
                  <label htmlFor="city4">대구광역시</label>
                </li>
                <li>
                  <label htmlFor="city5">부산광역시</label>
                </li>
              </ul>
            </details>
          </City>

          <City>
            <details className="custom-select">
              <summary className="radios">
                <input type="radio" name="dong" id="default" title="동" checked />
                <input type="radio" name="dong" id="dong1" title="서교동" />
                <input type="radio" name="dong" id="dong2" title="압구정동" />
                <input type="radio" name="dong" id="dong3" title="신림동" />
                <input type="radio" name="dong" id="dong4" title="창전동" />
                <input type="radio" name="dong" id="dong5" title="성산동" />
              </summary>
              <ul className="list">
                <li>
                  <label htmlFor="dong1">서교동</label>
                </li>
                <li>
                  <label htmlFor="dong2">압구정동</label>
                </li>
                <li>
                  <label htmlFor="dong3">신림동</label>
                </li>
                <li>
                  <label htmlFor="dong4">창전동</label>
                </li>
                <li>
                  <label htmlFor="dong5">성산동</label>
                </li>
              </ul>
            </details>
          </City>

          <City>
            <details className="custom-select">
              <summary className="radios">
                <input type="radio" name="bread" id="default" title="빵 종류" checked />
                <input type="radio" name="bread" id="bread1" title="소보루빵" />
                <input type="radio" name="bread" id="bread2" title="식빵" />
                <input type="radio" name="bread" id="bread3" title="단팥빵" />
                <input type="radio" name="bread" id="bread4" title="바게트빵" />
                <input type="radio" name="bread" id="bread5" title="샌드위치" />
              </summary>
              <ul className="list">
                <li>
                  <label htmlFor="bread1">소보루빵</label>
                </li>
                <li>
                  <label htmlFor="bread2">식빵</label>
                </li>
                <li>
                  <label htmlFor="bread3">단팥빵</label>
                </li>
                <li>
                  <label htmlFor="bread4">바게트빵</label>
                </li>
                <li>
                  <label htmlFor="bread5">샌드위치</label>
                </li>
              </ul>
            </details>
          </City>
        </SelectWrap>

        <CurrentLocation>
          <button type="button">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/search.png"
              alt=""
            />
            <span>현재 위치로 설정</span>
          </button>
        </CurrentLocation>
      </Location>

      <RangkingList>
        <ul className="list_wrap">
          {breadShopList.map((breadShopData) => (
            <li
              key={breadShopData.id}
              style={{
                outline: '1px solid red'
              }}>
              <img src={breadShopData.image} alt="" />
              {breadShopList ? (
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
                  alt=""
                  className="heart_image"
                  aria-hidden="true"
                  onClick={changeHeart}
                  active
                />
              ) : (
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png"
                  alt=""
                />
              )}

              <dl>
                <dt>{breadShopData.title}</dt>
                <dd />
              </dl>
            </li>
          ))}
        </ul>
      </RangkingList>
    </HouseRangkingWrap>
  );
};

HouseRangking.propTypes = {
  breadShopList: PropTypes.instanceOf(Array).isRequired,
  onbreadShopList: PropTypes.func.isRequired,
  onheartspace: PropTypes.bool.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadShopList: selectShopList
});

const breadShopDispathchToProps = (dispatch) => ({
  onbreadShopList: (breadShop) => dispatch(setCurrentBreadShop(breadShop)),
  onheartspace: (heart) => dispatch(setHeartTrueData(heart))
});

export default connect(breadStateToProps, breadShopDispathchToProps)(HouseRangking);
