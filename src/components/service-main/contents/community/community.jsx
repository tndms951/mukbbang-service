/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';

import Notice from './notice/notice';
import Event from './event/event';
import { CommunityWrap, TitleButton } from './community_style';

const Couumuity = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

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
      {query.menu === 'notice' ? <Notice /> : <Event />}
    </CommunityWrap>
  );
};

Couumuity.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default Couumuity;
