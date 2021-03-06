import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InfiniteScroll from 'react-infinite-scroll-component';
import qs from 'qs';
import { Helmet } from 'react-helmet';

import BreadLi from '../../../common-component/bread_li_component';
import { selectBreadList } from '../../../redux/bread/list/bread.selectors';
import { setBreadRankingList, setBreadListMore, setHeartTrueData, setHeartFalseData } from '../../../redux/bread/list/bread.actions';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import { PopularBreadWrap, PopularWrap, BreadList } from './bread_popular_style';
import LoadingHOC from '../../../common-component/loadingHOC';

/**
 * @author 송지수
 * @email tndms951@naver.com
 * @create date 2021-04-21
 * @modify date 2021-04-21
 * @desc [bread컴포넌트]
 */

const limit = 20;

const PopularBread = ({ breadList, onBreadList, onBreadListMore, onBreadHeartTrue, onBreadHeartFalse, location, history, isLoadingset, loading }) => {
  // 스크롤시
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchbreadData() {
      isLoadingset(true);
      try {
        const { status, data: breadData } = await axios.get(`/bread?page=${page}&limit=${limit}`);

        if (status === 200) {
          onBreadList(breadData.list);
          isLoadingset(false);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchbreadData();
  }, []);

  // 스크롤(pagination)
  const fetMoreData = async () => {
    try {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const queryObject = { ...query };
      queryObject.page = String(page + 1);
      queryObject.limit = String(limit);
      const queryData = qs.stringify(queryObject);
      const { data, status } = await axios.get(`/bread?${queryData}`);

      if (status === 200) {
        onBreadListMore(data.list);
        setPage(page + 1);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>먹빵-우리동네빵집 인기있는 빵</title>
        <meta name="description" content="먹빵-우리동네빵집 인기있는 빵 페이지 입니다." />
        <meta property="og:title" content="먹빵-우리동네빵집 인기있는 빵 페이지 입니다." />
        <meta property="og:description" content="먹빵-우리동네빵집 인기있는 빵 페이지 입니다." />
        <meta property="og:image" content="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/logo/logo.png" />
      </Helmet>
      {!loading && (
        <PopularBreadWrap>
          <PopularWrap>
            <h1>요즘 인기있는 빵</h1>
          </PopularWrap>

          <BreadList>
            {/* @ts-ignore */}
            <InfiniteScroll dataLength={breadList.length} next={fetMoreData} hasMore scrollThreshold="50px">
              <ul className="list_wrap">
                {breadList.map((list) => (
                  <BreadLi key={`bread-list${list.id}`} breadList={list} breadListLike={list.like} likeTrue={onBreadHeartTrue} likeFalse={onBreadHeartFalse} location={location} history={history} />
                ))}
              </ul>
            </InfiniteScroll>
          </BreadList>
        </PopularBreadWrap>
      )}
    </>
  );
};

PopularBread.propTypes = {
  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onBreadListMore: PropTypes.func.isRequired,
  onBreadHeartTrue: PropTypes.func.isRequired,
  onBreadHeartFalse: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  isLoadingset: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadList: selectBreadList
});

const breadDispathchToProps = (dispatch) => ({
  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onBreadListMore: (bread) => dispatch(setBreadListMore(bread)),
  onBreadHeartTrue: (trueBread) => dispatch(setHeartTrueData(trueBread)),
  onBreadHeartFalse: (falseBreadId) => dispatch(setHeartFalseData(falseBreadId))
});

export default connect(breadStateToProps, breadDispathchToProps)(LoadingHOC(PopularBread, <div className="loading_title">인기있는 빵 페이지 입니다.</div>));
