import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';

import BreadShopLi from '../../../common-component/breadShop_li_component';

import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

import { selectShopList, selectAddress, selectdongAddress } from '../../../redux/breadshoplist/breadShop.selectors';
import { setCurrentBreadShop, setShopTrueData, setShopFalseData, setSiAddressData, setDongAddressData } from '../../../redux/breadshoplist/breadShop.actions';

import { HouseRangkingWrap, ShopRangking, Location, SelectWrap, City, CurrentLocation, RangkingList } from './breadShop_rangking_style';

// eslint-disable-next-line no-unused-vars
const HouseRangking = ({ breadShopList, onBreadShopList, onBreadShopTrue, onBreadShopFalse, siAddressList, onAddressSi, dongAddressList, onAddressDong, location, history }) => {
  console.log(siAddressList);
  console.log(siAddressList.id);
  console.log(onAddressSi);
  console.log(location);
  const [siList, setSiList] = useState({
    id: -1,
    name: '시.도'
  });

  const [guvalue, setGuvalue] = useState({
    id: 0, // -1은 설정이 되어있어있어서 0으로 바꿈 0빼고 나머지 숫자는 다 true 이기때문에 0은 false
    name: '구'
  });

  // 연습용
  const [title, setTitle] = useState('');
  console.log(title);

  useEffect(() => {
    // 빵집입력할때 연습용
    // async function fetchShopData() {
    //   try {
    //     const query = qs.parse(location.search, {
    //       ignoreQueryPrefix: true
    //     });
    //     const { status, data: breadShopData } = await axios.get(`/bread/shop${location.search}`);
    //     console.log(breadShopData);
    //     if (status === 200) {
    //       onBreadShopList(breadShopData.list);
    //       setTitle(query.title || '');
    //     }
    //   } catch (err) {
    //     errorhandler(err);
    //   }
    // }

    // 쿼리 연습용 거의확정!!
    async function fetchShopData() {
      try {
        const { status, data: breadShopData } = await axios.get(`/bread/shop${location.search}`);
        console.log(breadShopData);
        if (status === 200) {
          onBreadShopList(breadShopData.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    async function fetchSiAddress() {
      try {
        const query = qs.parse(location.search, {
          ignoreQueryPrefix: true
        });
        console.log(query);
        const { status, data } = await axios.get('/util/address/si');
        console.log(data);

        if (status === 200) {
          onAddressSi(data.list);
          console.log(onAddressSi(data.list));
          setSiList(query);
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }

    async function fetchGuAddress() {
      try {
        console.log('aaa');
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }

    fetchShopData();
    fetchSiAddress();
    fetchGuAddress();
  }, [location.search]);

  const handleClickSi = async (address) => {
    console.log(address.id);
    setSiList(address);
    try {
      const { status, data } = await axios.get(`/util/address/gu/${address.id}`);
      console.log(data);
      if (status === 200) {
        onAddressDong(data.list);
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  const handleClickGu = async (address) => {
    try {
      setGuvalue(address);
      console.log(address.id);
      console.log('aaa');
    } catch (err) {
      errorhandler(err);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // 빵집입력할때 연습용
  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   const queryObject = {};
  //   if (title) {
  //     queryObject.title = title;
  //   }
  //   const queryData = qs.stringify(queryObject);
  //   history.push(`/rank/bread-house${queryData ? `?${queryData}` : ''}`);
  // };

  // 과외때 시,구 위에 쿼리 찍히게하기!!
  const handleSearch = (e) => {
    e.preventDefault();

    const queryObject = {};
    if (siList.id) {
      queryObject.si_code = siList.id;
    }
    if (guvalue.id) {
      queryObject.gu_code = guvalue.id;
    }

    const queryData = qs.stringify(queryObject); // 쿼리를 자기스스로 만들어줌
    history.push(`/rank/bread-house${queryData ? `?${queryData}` : ''}`);
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
                  <li key={`siAddress${address.id}`} onClick={() => handleClickSi(address)} onKeyPress={handleClickSi} role="presentation">
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
              <ul>
                {dongAddressList.map((address) => (
                  <li key={`dongAddress${address.id}`} onClick={() => handleClickGu(address)} onKeyPress={handleClickSi} role="presentation">
                    <label>{address.name}</label>
                  </li>
                ))}
              </ul>
            </details>
          </City>
          <City>
            <form onSubmit={handleSearch}>
              <div className="col-sm-8">
                <input type="title" className="form-control form-control-lg" placeholder="빵집을 입력해주세요" value={title} onChange={handleChange} />
              </div>
              <button type="submit">검색</button>
            </form>
          </City>
        </SelectWrap>

        <CurrentLocation>
          <button type="button">
            <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/search.png" alt="" />
            <span>현재 위치로 설정</span>
          </button>
        </CurrentLocation>
      </Location>

      <RangkingList>
        <ul className="list_wrap">
          {breadShopList.map((breadShopData) => (
            <BreadShopLi key={`bread_shop_list${breadShopData.id}`} shopList={breadShopData} shopImage={breadShopData.image} shopSeverLike={breadShopData.like} shopId={breadShopData.id} likeTrue={onBreadShopTrue} likeFalse={onBreadShopFalse} />
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
