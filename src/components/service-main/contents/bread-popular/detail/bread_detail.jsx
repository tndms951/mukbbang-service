import React from 'react';
import PropTypes from 'prop-types';

import { BreadDtail } from './bread_detail_style';
import Comment from '../../../../common-component/comment/comment';

const BreadDetail = ({ match }) => {
  console.log('aaaa');
  const { breadId } = match.params;
  console.log(breadId);
  return (
    <BreadDtail>
      <div className="title_wrap">
        <span className="detail_text">빵 상세</span>
      </div>
      <div className="image_wrap">
        <img src="//w.namu.la/s/2772140099705c9fd0e64f3ca13df1a5cb6a98f103532679e38617a809f459cd02ff0aa8001c88fd13adc651c642c33e22f340d7a39350b8b7a69b5b377c87b5c0fa03dd582ae0073e43f3c1f99a2aa55aae5ab687722c590ed13def08df90ed6832ea0178ec894fd7f357e05960ba81" alt="" />
      </div>

      <span className="detail_bread_name">Name</span>
      <p>설명</p>
      <Comment match={match.params} breadType="breadType" />
    </BreadDtail>
  );
};

BreadDetail.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired
};

export default BreadDetail;
