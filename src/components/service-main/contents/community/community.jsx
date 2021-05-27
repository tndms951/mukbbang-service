/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { errorhandler } from 'utils/common';
import qs from 'qs';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import axios from '../../../../utils/axios';
import Notice from './notice/notice';
import Event from './event/event';
import { CommunityWrap, TitleButton } from './community_style';
import { setNoticeList, setEventList } from '../../../redux/community/community.actions';
import { selectNotice, selectEvent } from '../../../redux/community/community.selectors';

const Couumuity = ({ onNoticeList, location, noticeList, onEventList, eventList }) => {
  console.log(location);
  console.log(eventList);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  useEffect(() => {
    async function fetchCommunityData() {
      try {
        if (query.menu === 'notice') {
          const { data, status } = await axios.get('/notice');
          console.log(data);
          if (status === 200) {
            onNoticeList(data.list);
            console.log('노티스');
          }
        } else {
          const { data, status } = await axios.get('/event');
          console.log(data);
          if (status === 200) {
            onEventList(data.list);
            console.log('이벤트');
          }
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }
    fetchCommunityData();
  }, []);

  return (
    <CommunityWrap>
      <TitleButton>
        <Link to="/community?menu=notice">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <span className={query.menu === 'notice' ? 'notice_active' : ''}>공지사항</span>
        </Link>
        <Link to="/community?menu=event">
          <span className={query.menu === 'event' ? 'event_action' : ''}>이벤트</span>
        </Link>
      </TitleButton>
      {query.menu === 'notice' ? <Notice noticeList={noticeList} /> : <Event />}
    </CommunityWrap>
  );
};

Couumuity.propTypes = {
  onNoticeList: PropTypes.func.isRequired,
  noticeList: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  onEventList: PropTypes.func.isRequired,
  eventList: PropTypes.instanceOf(Object).isRequired
};

const communityStateToProps = createStructuredSelector({
  noticeList: selectNotice,
  eventList: selectEvent
});

const communityDispathch = (dispatch) => ({
  onNoticeList: (list) => dispatch(setNoticeList(list)),
  onEventList: (list) => dispatch(setEventList(list))
});

export default connect(communityStateToProps, communityDispathch)(Couumuity);
