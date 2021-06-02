import React, { useEffect, useState } from 'react';
import { errorhandler } from 'utils/common';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import axios from '../../../../../utils/axios';
import { EventWrap } from './event_style';
import { setEventList, setEventPagination } from '../../../../redux/community/community.actions';
import { selectEvent } from '../../../../redux/community/community.selectors';

const limit = 4;

const Event = ({ onEventList, eventList, onEventPagination }) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const { data, status } = await axios.get(`/event?page=${page}&limit=${limit}`);
        if (status === 200) {
          onEventList(data.list);
          setHasMore(data.pagination.currentPage !== data.pagination.totalPage);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchEventData();
  }, []);

  // 스크롤(pagination)
  const fetMoreData = async () => {
    try {
      const { data, status } = await axios.get(`/event?page=${page + 1}&limit=${limit}`);
      if (status === 200) {
        onEventPagination(data.list);
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
    <EventWrap>
      <ul>
        {/* @ts-ignore */}
        <InfiniteScroll dataLength={eventList.length} next={fetMoreData} hasMore={hasMore} scrollThreshold="50px">
          {eventList.map((list) => (
            <li key={`event=${list.id}`}>
              <a href={list.link} target="_blank" rel="noreferrer">
                <div className="box_wrap" key={`event-${list.id}`}>
                  <img src={list.imageUrl} alt="" />
                  {/* <span>{list.title}</span> */}
                  <p className={list.close ? 'close' : 'going'}>{list.close ? '이벤트 종료' : '진행중'}</p>
                  <span>
                    <strong>[{list.title}]</strong> {moment(list.startAt).format('YYYY-MM-DD ')}
                    {'~'}
                    {moment(list.endAt).format(' YYYY-MM-DD')}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </InfiniteScroll>
      </ul>
    </EventWrap>
  );
};

Event.propTypes = {
  onEventList: PropTypes.func.isRequired,
  eventList: PropTypes.instanceOf(Object).isRequired,
  onEventPagination: PropTypes.func.isRequired
};

const eventStateToProps = createStructuredSelector({
  eventList: selectEvent
});

const eventDispathch = (dispatch) => ({
  onEventList: (list) => dispatch(setEventList(list)),
  onEventPagination: (list) => dispatch(setEventPagination(list))
});

export default connect(eventStateToProps, eventDispathch)(Event);
