import React, { useEffect } from 'react';
import { errorhandler } from 'utils/common';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import axios from '../../../../../utils/axios';
import { EventWrap } from './event_style';
import { setEventList } from '../../../../redux/community/community.actions';
import { selectEvent } from '../../../../redux/community/community.selectors';

const Event = ({ onEventList, eventList }) => {
  console.log(eventList);
  console.log('이벤트!!!!!!!!');

  useEffect(() => {
    async function fetchEventData() {
      try {
        const { data, status } = await axios.get('/event');
        if (status === 200) {
          onEventList(data.list);
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
      }
    }
    fetchEventData();
  }, []);

  return (
    <EventWrap>
      <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/event/%E1%84%8C%E1%85%B5%E1%84%89%E1%85%AE%E1%84%88%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg" alt="" />
      {eventList.map((list) => (
        // <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/event/%E1%84%8C%E1%85%B5%E1%84%89%E1%85%AE%E1%84%88%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpeg" alt="" />
        <div className="box_wrap" key={`event-${list.id}`}>
          <span>{list.title}</span>
          <img src={list.imageUrl} alt="" />
          <p className={list.close ? 'going' : 'close'}>{list.close ? '진행중' : '종료'}</p>
        </div>
      ))}
    </EventWrap>
  );
};

Event.propTypes = {
  onEventList: PropTypes.func.isRequired,
  eventList: PropTypes.instanceOf(Object).isRequired
};

const eventStateToProps = createStructuredSelector({
  eventList: selectEvent
});

const eventDispathch = (dispatch) => ({
  onEventList: (list) => dispatch(setEventList(list))
});

export default connect(eventStateToProps, eventDispathch)(Event);
