import React, { useEffect, useState } from 'react';

import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';

import { errorhandler } from 'utils/common';
import DownPage from './notice_downPage';
import axios from '../../../../../utils/axios';
import { NoticeWrap } from './notice_style';
import { setNoticeList, setNoticePagination } from '../../../../redux/community/community.actions';
import { selectNotice } from '../../../../redux/community/community.selectors';
import LoadingHOC from '../../../../common-component/loadingHOC';

const limit = 10;

const Notice = ({ onNoticeList, noticeList, onNoticePagination, isLoadingset, loading, StyleValue }) => {
  console.log(StyleValue);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [dropDown, setDropDown] = useState(0);

  useEffect(() => {
    async function fetchNoticeData() {
      isLoadingset(true);
      try {
        const { data, status } = await axios.get(`/notice?page=${page}&limit=${limit}`);

        if (status === 200) {
          onNoticeList(data.list);
          setHasMore(data.pagination.currentPage !== data.pagination.totalPage);
          isLoadingset(false);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchNoticeData();
  }, []);

  // 스크롤(pagination)
  const fetMoreData = async () => {
    try {
      const { status, data } = await axios.get(`/notice?page=${page + 1}&limit=${limit}`);

      if (status === 200) {
        onNoticePagination(data.list);
        setPage(page + 1);
        if (data.pagination.currentPage === data.pagination.totalPage) {
          setHasMore(false);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const handleClick = (listId) => {
    if (dropDown === listId) {
      setDropDown(0);
    } else {
      setDropDown(listId);
    }
  };

  return (
    !loading && (
      <NoticeWrap>
        <ul>
          {/* @ts-ignore */}
          <InfiniteScroll dataLength={noticeList.length} next={fetMoreData} hasMore={hasMore} scrollThreshold="50px">
            {noticeList.map((list, index) => (
              <li key={`community-notice-${list.id}`}>
                <div className="notice_title" onClick={() => handleClick(list.id)} role="presentation">
                  <span className="count_number">{index + 1}</span> <span className="notice_content">{list.title}</span>
                  <div className={dropDown === list.id ? 'arrow_up' : 'arrow_down'} />
                  <div className="notice_date">{moment(list.createdAt).format('YYYY-MM-DD')}</div>
                </div>
                {list.id === dropDown ? <DownPage list={list} /> : ''}
              </li>
            ))}
          </InfiniteScroll>
        </ul>
      </NoticeWrap>
    )
  );
};

Notice.propTypes = {
  onNoticeList: PropTypes.func.isRequired,
  noticeList: PropTypes.instanceOf(Object).isRequired,
  onNoticePagination: PropTypes.func.isRequired,
  isLoadingset: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  StyleValue: PropTypes.bool.isRequired
};

const communityStateToProps = createStructuredSelector({
  noticeList: selectNotice
});

const communityDispathch = (dispatch) => ({
  onNoticeList: (list) => dispatch(setNoticeList(list)),
  onNoticePagination: (list) => dispatch(setNoticePagination(list))
});

export default connect(communityStateToProps, communityDispathch)(LoadingHOC(Notice, <div className="loading_title">공지사항 페이지 입니다.</div>));
