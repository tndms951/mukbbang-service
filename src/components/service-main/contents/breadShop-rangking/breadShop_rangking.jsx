import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';

import BreadShopLi from '../../../common-component/breadShop_li_component';

import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

import {
  selectShopList,
  selectAddress,
  selectdongAddress
} from '../../../redux/breadshoplist/breadShop.selectors';
import {
  setCurrentBreadShop,
  setShopTrueData,
  setShopFalseData,
  setSiAddressData,
  setDongAddressData
} from '../../../redux/breadshoplist/breadShop.actions';

import {
  HouseRangkingWrap,
  ShopRangking,
  Location,
  SelectWrap,
  City,
  CurrentLocation,
  RangkingList
} from './breadShop_rangking_style';

const HouseRangking = ({
  breadShopList,
  onBreadShopList,
  onBreadShopTrue,
  onBreadShopFalse,
  siAddressList,
  onAddressSi,
  dongAddressList,
  onAddressDong,
  location,
  history
}) => {
  // console.log(breadShopList);
  // console.log(onAddressSi);
  // console.log(onAddressDong);
  console.log(location);

  const [siList, setSiList] = useState('');
  console.log(siList);

  // 연습용
  const [title, setTitle] = useState('');
  console.log(title);

  const [siAddress, setSiAddress] = useState('');
  console.log(siAddress);
  console.log('aaa');

  useEffect(() => {
    // 연습용
    async function fetchShopData() {
      try {
        const query = qs.parse(location.search, {
          ignoreQueryPrefix: true
        });
        const { status, data: breadShopData } = await axios.get(`/bread/shop${location.search}`);
        console.log(breadShopData);
        if (status === 200) {
          onBreadShopList(breadShopData.list);
          setTitle(query.title || '');
        }
      } catch (err) {
        errorhandler(err);
        // console.log(err);
      }
    }

    // async function fetchShopData() {
    //   try {
    //     const { status, data: breadShopData } = await axios.get('/bread/shop');
    //     console.log(breadShopData);
    //     if (status === 200) {
    //       onBreadShopList(breadShopData.list);
    //     }
    //   } catch (err) {
    //     errorhandler(err);
    //     // console.log(err);
    //   }
    // }

    async function fetchSiAddress() {
      try {
        const { status, data } = await axios.get('/util/address/si');
        console.log(data);

        if (status === 200) {
          onAddressSi(data.list);
          console.log(onAddressSi(data.list));
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }

    //   async function fetchDongAddress() {
    //     try {
    //       const { status, data } = await axios.get('/util/address/gu');
    //       console.log(data);

    //       if (status === 200) {
    //         onAddressDong(data.list);
    //         console.log(onAddressDong(data.list));
    //       }
    //     } catch (err) {
    //       errorhandler(err);
    //       console.log(err);
    //     }
    //   }

    //   fetchShopData();
    //   fetchSiAddress();
    //   fetchDongAddress();
    // }, []);

    // const query = qs.parse(location.search, {
    //   ignoreQueryPrefix: true
    // });
    // console.log(query);

    // async function fetchguAddress() {
    //   console.log('aaaaaa');
    //   // console.log(breadSiqueryId);
    //   try {
    //     const { status, data } = await axios.get(`/util/address/gu/${siList}`);
    //     console.log(data);
    //     if (status === 200) {
    //       onAddressDong(data.list);
    //     }
    //   } catch (err) {
    //     errorhandler(err);
    //     console.log(err);
    //   }
    // }
    // if (query.si_code) {
    //   fetchguAddress();
    // }
    fetchShopData();
    fetchSiAddress();
  }, [location.search]);

  // click 이벤트
  // const handleClick = async () => {
  //   console.log('aaaa');
  //   try {
  //     const { status, data } = await axios.get('/util/address/gu');
  //     console.log(data);
  //     if (status === 200) {
  //       onAddressDong(data.list);
  //     }
  //   } catch (err) {
  //     errorhandler(err);
  //     console.log(err);
  //   }
  // };

  const handleClickSi = async (address) => {
    setSiList(address);
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });

    async function fetchguAddress() {
      try {
        const { status, data } = await axios.get(`/util/address/gu/${location.search}`);
        console.log(data);
        if (status === 200) {
          onAddressDong(data.list);
          setSiAddress(query.siAddress || '');
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }

    console.log(location.search.siList);
    console.log(query);
    if (query) {
      fetchguAddress();
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // 연습용
  const handleSearch = (e) => {
    e.preventDefault();

    const queryObject = {};
    if (title) {
      queryObject.title = title;
    }
    const queryData = qs.stringify(queryObject);
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
                {/* <input type="radio" name="city" id="default" title="시.도" checked /> */}
                <input
                  type="radio"
                  name="city"
                  id="default"
                  value="ssss"
                  title={siList.name}
                  checked
                />
                {/* <input type="radio" name="city" id="city1" title="서울특별시" />
                <input type="radio" name="city" id="city2" title="경기도" />
                <input type="radio" name="city" id="city3" title="대전광역시" />
                <input type="radio" name="city" id="city4" title="대구광역시" />
                <input type="radio" name="city" id="city5" title="부산광역시" /> */}
              </summary>
              <ul className="list">
                {siAddressList.map((address) => (
                  <li
                    key={`siAddress${address.id}`}
                    onClick={() => handleClickSi(address)}
                    onKeyPress={handleClickSi}
                    role="presentation">
                    <label>{address.name}</label>
                  </li>
                ))}
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
                {dongAddressList.map((dong) => {
                  console.log(dong);

                  return (
                    <li>
                      <label htmlFor="dong1">{dong.name}</label>
                    </li>
                  );
                })}
                {/* <li>
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
                </li> */}
              </ul>
            </details>
          </City>

          <City>
            {/* <details className="custom-select">
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
            </details> */}
          </City>
          <City>
            <form onSubmit={handleSearch}>
              <div className="col-sm-8">
                <input
                  type="title"
                  className="form-control form-control-lg"
                  placeholder="빵집을 입력해주세요"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">검색</button>
            </form>
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
            <BreadShopLi
              key={`bread_shop_list${breadShopData.id}`}
              shopList={breadShopData}
              shopImage={breadShopData.image}
              shopSeverLike={breadShopData.like}
              shopId={breadShopData.id}
              likeTrue={onBreadShopTrue}
              likeFalse={onBreadShopFalse}
            />
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
