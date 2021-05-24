import React, { useEffect, useState } from 'react';
import { errorhandler } from 'utils/common';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from '../../../../../utils/axios';
import { CommunityWrap, TitleButton, NoticeWrap } from './notice_style';
import { setNoticeList } from '../../../../redux/community/notice.actions';
import { selectCommunity } from '../../../../redux/community/notice.selectors';

const Notice = ({ onNoticeList, noticeList }) => {
  console.log(noticeList);
  const [notice, setNotice] = useState(true);
  console.log(setNotice);

  useEffect(() => {
    async function fetchCommunityData() {
      try {
        const { data, status } = await axios.get(`/notice?menu=${notice}`);
        console.log(data);
        if (status === 200) {
          onNoticeList(data.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchCommunityData();
  }, []);

  return (
    <CommunityWrap>
      <TitleButton>
        <Link to="/community">
          <span className="menu_notice">공지사항</span>
        </Link>
        {/* <Link to={`/community${event}`}> */}
        <span>이벤트</span> {/* </Link> */}
      </TitleButton>

      <NoticeWrap>
        <ul>
          {noticeList.map((list, index) => (
            <li>
              <span className="count_number">{index - 1}</span>
              <span className="notice_content">{list.content}</span>
            </li>
          ))}
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
  onNoticeList: (list) => dispatch(setNoticeList(list))
});

export default connect(communityStateToProps, communityDispathch)(Notice);
