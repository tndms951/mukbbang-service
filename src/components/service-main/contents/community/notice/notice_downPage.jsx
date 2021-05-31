import React from 'react';
import PropTypes from 'prop-types';

import { NoticeDownPage } from './notice_downPage_style';

const DownPage = ({ list }) => (
  <NoticeDownPage>
    <span>
      안녕하세요 우리 동네 빵집 MeoKppang 입니다.
      <br />
      <br />
    </span>

    <h1>{list.content}</h1>
  </NoticeDownPage>
);

DownPage.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired
};

export default DownPage;
