import React, { useEffect } from 'react';
import { errorhandler } from 'utils/common';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from '../../../../utils/axios';
import { CommunityWrap, TitleButton, NoticeWrap } from './notice_style';
import { setNoticeList } from '../../../redux/community/notice.actions';
import { selectCommunity } from '../../../redux/community/notice.selectors';

const Notice = ({ onNoticeList, noticeList }) => {
  console.log(onNoticeList);
  console.log(noticeList);
  useEffect(() => {
    async function fetchCommunityData() {
      try {
        const { data, status } = await axios.get('/notice');
        if (status === 200) {
          noticeList(data.list);
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
        <span>공지사항</span>
        <span>이벤트</span>
      </TitleButton>

      <NoticeWrap>
        <ul>
          <li>1번공지사항입니당.</li>
          <li>2번공지사항입니당.</li>
        </ul>
      </NoticeWrap>
    </CommunityWrap>
  );
};

Notice.propTypes = {
  onNoticeList: PropTypes.func.isRequired,
  noticeList: PropTypes.instanceOf(Object).isRequired
};

const communityStateToProps = createStructuredSelector({
  noticeList: selectCommunity
});

const communityDispathch = (dispatch) => ({
  onnoticeList: (list) => dispatch(setNoticeList(list))
});

export default connect(communityStateToProps, communityDispathch)(Notice);
