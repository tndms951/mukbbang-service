import React, { useEffect, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import qs from 'qs';

import { errorhandler } from 'utils/common';
import BreadShopLi from '../../../../common-component/breadShop_li_component';
import { setCurrentBreadShop, setCurrentBreadShopMore, setShopTrueData, setShopFalseData, setBreadShopReset } from '../../../../redux/breadshop/list/breadShop.actions';
import { selectShopList } from '../../../../redux/breadshop/list/breadShop.selectors';
import { selectCurrentUser } from '../../../../redux/user/user.selectors';
import axios from '../../../../../utils/axios';
import { BreadPickList } from './pick_breadShop_style';

const limit = 20;

const PickBreadShop = ({ breadShopList, onBreadShopList, onBreadShopPagination, onBreadShopTrue, onBreadShopFalse, onBreadShopReset, location, history, currentUser }) => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      history.push('/');
    }
  }, [currentUser]);

  useEffect(() => {
    async function fetchPickBreadShop() {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const newQuery = { ...query };
      newQuery.page = String(1);
      newQuery.limit = String(limit);

      const queryData = qs.stringify(newQuery);

      try {
        const { status, data } = await axios.get(`/user/bread/shop?${queryData}`);

        if (status === 200) {
          setPage(1);
          onBreadShopList(data.list);
          setHasMore(data.pagination.currentPage !== data.pagination.totalPage);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchPickBreadShop();

    return onBreadShopReset();
  }, []);

  // 스크롤pagination
  const fetchMoreData = async () => {
    try {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const queryObject = { ...query };
      queryObject.page = String(page + 1);
      queryObject.limit = String(limit);
      const queryData = qs.stringify(queryObject);
      const { status, data } = await axios.get(`/user/bread/shop?${queryData}`);
      console.log(data);
      if (status === 200) {
        onBreadShopPagination(data.list);
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
    <BreadPickList>
      {/* @ts-ignore */}
      <InfiniteScroll dataLength={breadShopList.length} next={fetchMoreData} hasMore={hasMore} scrollThreshold="50px">
        <ul className="list_wrap">
          {breadShopList.map((list) => (
            <BreadShopLi key={`pick-breadShop-list${list.id}`} shopList={list} shopSeverLike={list.like} shopId={list.id} likeTrue={onBreadShopTrue} likeFalse={onBreadShopFalse} />
          ))}
        </ul>
      </InfiniteScroll>
    </BreadPickList>
  );
};
PickBreadShop.defaultProps = {
  currentUser: null
};

PickBreadShop.propTypes = {
  onBreadShopList: PropTypes.func.isRequired,
  breadShopList: PropTypes.instanceOf(Object).isRequired,
  onBreadShopPagination: PropTypes.func.isRequired,
  onBreadShopTrue: PropTypes.func.isRequired,
  onBreadShopFalse: PropTypes.func.isRequired,
  onBreadShopReset: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  currentUser: PropTypes.instanceOf(Object)
};

const pickStateToProps = createStructuredSelector({
  breadShopList: selectShopList,
  currentUser: selectCurrentUser
});

const pickDispathch = (dispatch) => ({
  onBreadShopList: (list) => dispatch(setCurrentBreadShop(list)),
  onBreadShopPagination: (list) => dispatch(setCurrentBreadShopMore(list)),
  onBreadShopTrue: (trueBreadShop) => dispatch(setShopTrueData(trueBreadShop)),
  onBreadShopFalse: (falseBreadShop) => dispatch(setShopFalseData(falseBreadShop)),
  onBreadShopReset: () => dispatch(setBreadShopReset())
});

export default connect(pickStateToProps, pickDispathch)(PickBreadShop);
