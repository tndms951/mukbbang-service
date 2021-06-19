import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import qs from 'qs';

import { errorhandler } from 'utils/common';
import axios from '../../../../../utils/axios';
import BreadLi from '../../../../common-component/bread_li_component';
import { PickBreadList } from './pick_bread_style';
import { setBreadRankingList, setHeartTrueData, setHeartFalseData } from '../../../../redux/bread/list/bread.actions';
import { selectBreadList } from '../../../../redux/bread/list/bread.selectors';

const limit = 20;

const PickBread = ({ breadList, onBreadList, onBreadTrue, onBreadFalse, location }) => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPickBread() {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const newQuery = { ...query };
      newQuery.page = String(1);
      newQuery.limit = String(limit);

      const queryData = qs.stringify(newQuery);
      try {
        const { status, data } = await axios.get(`/user/bread?${queryData}`);
        if (status === 200) {
          onBreadList(data.list);
          setPage(1);
          if (data.pagination.currentPage !== data.pagination.totalPage) {
            setHasMore(true);
          }
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchPickBread();
  }, []);

  // 스크롤(pagination)
  const fetchMoreData = async () => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });
    const queryObject = { ...query };
    queryObject.page = String(page + 1);
    queryObject.limit = String(limit);
    const queryData = qs.stringify(queryObject);

    try {
      const { status, data } = await axios.get(`/user/bread${queryData}`);
      if (status === 200) {
        onBreadList(data.list);
        setPage(page + 1);
        if (data.pagination.currentPage === data.pagination.totalPage) {
          setHasMore(false);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <PickBreadList>
      {/* @ts-ignore */}
      <InfiniteScroll dataLength={breadList.length} next={fetchMoreData} hasMore={hasMore} scrollThreshold="50px">
        <ul className="list_wrap">
          {breadList.map((list) => (
            <BreadLi key={`pick-bread-list${list.id}`} breadList={list} breadListLike={list.like} likeTrue={onBreadTrue} likeFalse={onBreadFalse} location={location} />
          ))}
        </ul>
      </InfiniteScroll>
    </PickBreadList>
  );
};

PickBread.propTypes = {
  breadList: PropTypes.instanceOf(Object).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onBreadTrue: PropTypes.func.isRequired,
  onBreadFalse: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired
};
const pickBreadStateToProps = createStructuredSelector({
  breadList: selectBreadList
});

const pickBreadDispathchToProps = (dispatch) => ({
  onBreadList: (list) => dispatch(setBreadRankingList(list)),
  onBreadTrue: (breadtrue) => dispatch(setHeartTrueData(breadtrue)),
  onBreadFalse: (breadfalse) => dispatch(setHeartFalseData(breadfalse))
});

export default connect(pickBreadStateToProps, pickBreadDispathchToProps)(PickBread);
