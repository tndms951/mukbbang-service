import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';
import { Link } from 'react-router-dom';

import BreadShopLi from '../../../common-component/breadShop_li_component';

import axios from '../../../../utils/axios';
import { errorhandler, sweetAlert } from '../../../../utils/common';

import { selectShopList, selectAddress, selectdongAddress } from '../../../redux/breadshop/list/breadShop.selectors';
import { setCurrentBreadShop, setShopTrueData, setShopFalseData, setSiAddressData, setDongAddressData } from '../../../redux/breadshoplist/breadShop.actions';

import { HouseRangkingWrap, ShopRangking, Location, SelectWrap, City, CurrentLocation, LocationText, RangkingList } from './breadShop_rangking_style';

/**
 * @author 송지수
 * @email tndms951@naver.com
 * @create date 2021-03-21 15:42:55
 * @modify date 2021-03-21 15:42:55
 * @desc [breadShop컴포넌트]
 */

// eslint-disable-next-line no-unused-vars
const HouseRangking = ({ breadShopList, onBreadShopList, onBreadShopTrue, onBreadShopFalse, siAddressList, onAddressSi, dongAddressList, onAddressDong, location, history }) => {
  const [siList, setSiList] = useState({
    id: -1,
    name: '시.도'
  });

  const [guvalue, setGuvalue] = useState({
    id: 0, // -1은 설정이 되어있어있어서 0으로 바꿈 0빼고 나머지 숫자는 다 true 이기때문에 0은 false
    name: '구'
  });

  const [addressName, setAddressName] = useState('전체');

  useEffect(() => {
    async function fetchShopData() {
      try {
        const { status, data: breadShopData } = await axios.get(`/bread/shop${location.search}`);

        if (status === 200) {
          onBreadShopList(breadShopData.list);
          setAddressName(breadShopData.data.addressName);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    fetchShopData();

    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    console.log(query);
    if (!query.si_code) {
      setSiList({
        id: -1,
        name: '시.도'
      });
    }
    if (!query.gu_code) {
      setGuvalue({
        id: 0,
        name: '구'
      });
    }
  }, [location.search, onAddressSi, onBreadShopList]);

  useEffect(() => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    async function fetchSiAddress() {
      try {
        const { status, data } = await axios.get('/util/address/si');

        if (status === 200) {
          onAddressSi(data.list);
          if (query.si_code) {
            const ValueId = data.list.find((value) => value.id === Number(query.si_code));

            if (ValueId) {
              setSiList(ValueId);
            }
          }
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    async function fetchGuAddress(siCodeId) {
      try {
        const { status, data } = await axios.get(`/util/address/gu/${siCodeId}`);

        if (status === 200) {
          onAddressDong(data.list);
        }

        if (query.gu_code) {
          const ValueId = data.list.find((value) => value.id === Number(query.gu_code));
          if (ValueId) {
            setGuvalue(ValueId);
          }
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchSiAddress();

    if (query.si_code) {
      fetchGuAddress(query.si_code);
    }
  }, []);

  const handleClickSi = async (address) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    const queryObject = { ...query };
    delete queryObject.gu_code;
    queryObject.si_code = address.id;

    const queryData = qs.stringify(queryObject);
    setSiList(address);
    setGuvalue({
      id: 0,
      name: '구'
    });
    history.push(`/rank/bread-house${queryData ? `?${queryData}` : ''}`);
    try {
      const { status, data } = await axios.get(`/util/address/gu/${address.id}`);

      if (status === 200) {
        onAddressDong(data.list);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const handleClickGu = async (address) => {
    try {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const queryObject = { ...query };
      queryObject.gu_code = address.id;
      const queryData = qs.stringify(queryObject);
      history.push(`/rank/bread-house${queryData ? `?${queryData}` : ''}`);

      setGuvalue(address);
    } catch (err) {
      errorhandler(err);
    }
  };

  const successGeo = (position) => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    const queryObject = { ...query };
    delete queryObject.si_code;
    delete queryObject.gu_code;

    setSiList({
      id: -1,
      name: '시.도'
    });
    setGuvalue({
      id: 0,
      name: '구'
    });

    const { latitude, longitude } = position.coords;
    queryObject.lat = String(latitude);
    queryObject.lon = String(longitude);

    const queryData = qs.stringify(queryObject);
    history.push(`/rank/bread-house?${queryData}`);
  };

  const errorGeo = () => {
    sweetAlert('위치정보를 받아오지 못했습니다.');
  };

  const handleLocal = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
    } else {
      sweetAlert('위치정보를 받아오지 못했습니다.');
    }
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
                <input type="radio" name="city" id="default" title={siList.name} checked />
              </summary>
              <ul className="list">
                {siAddressList.map((address) => (
                  <li key={`siAddress-${address.id}`} onClick={() => handleClickSi(address)} onKeyPress={handleClickSi} role="presentation">
                    <label>{address.name}</label>
                  </li>
                ))}
              </ul>
            </details>
          </City>

          <City>
            <details className="custom-select">
              <summary className="radios">
                <input type="radio" name="dong" id="default" title={guvalue.name} checked />
              </summary>
              <ul className="list">
                {dongAddressList.map((address) => (
                  <li key={`dongAddress-${address.id}`} onClick={() => handleClickGu(address)} onKeyPress={handleClickSi} role="presentation">
                    <label>{address.name}</label>
                  </li>
                ))}
              </ul>
            </details>
          </City>
        </SelectWrap>

        <CurrentLocation>
          <button type="button">
            <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/search.png" alt="" />
            <span onClick={handleLocal} aria-hidden="true" role="button">
              현재 위치로 설정
            </span>
          </button>
        </CurrentLocation>
      </Location>

      <LocationText>
        <span>{addressName} 빵집 랭킹</span>
      </LocationText>

      <RangkingList>
        <ul className="list_wrap">
          {breadShopList.map((breadShopData) => (
            <Link to={`/rank/bread-house/detail/${breadShopData.id}`}>
              <BreadShopLi key={`bread_shop_list${breadShopData.id}`} shopList={breadShopData} shopImage={breadShopData.image} shopSeverLike={breadShopData.like} shopId={breadShopData.id} likeTrue={onBreadShopTrue} likeFalse={onBreadShopFalse} />
            </Link>
          ))}
        </ul>
      </RangkingList>
    </HouseRangkingWrap>
  );
};

HouseRangking.propTypes = {
  breadShopList: PropTypes.instanceOf(Array).isRequired,
  onBreadShopList: PropTypes.func.isRequired,
  onBreadShopTrue: PropTypes.func.isRequired,
  onBreadShopFalse: PropTypes.func.isRequired,
  siAddressList: PropTypes.instanceOf(Array).isRequired,
  onAddressSi: PropTypes.func.isRequired,
  dongAddressList: PropTypes.instanceOf(Array).isRequired,
  onAddressDong: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

const breadStateToProps = createStructuredSelector({
  breadShopList: selectShopList,
  siAddressList: selectAddress,
  dongAddressList: selectdongAddress
});

const breadShopDispathchToProps = (dispatch) => ({
  onBreadShopList: (breadShop) => dispatch(setCurrentBreadShop(breadShop)),
  onBreadShopTrue: (trueBreadShop) => dispatch(setShopTrueData(trueBreadShop)),
  onBreadShopFalse: (falseBreadShop) => dispatch(setShopFalseData(falseBreadShop)),
  onAddressSi: (addressSi) => dispatch(setSiAddressData(addressSi)),
  onAddressDong: (addressDong) => dispatch(setDongAddressData(addressDong))
});

export default connect(breadStateToProps, breadShopDispathchToProps)(HouseRangking);
