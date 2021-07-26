import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';

import PickBreadShop from './pick-breadShop/pick_breadShop';
import PickBread from './pick-bread/pick_bread';
import { PickWrap, TitleButton } from './pick_bread_breadShop_style';

const PickBreadBreadShop = ({ location, history }) => {
  useEffect(() => {
    // 다시 수정하기
  });
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  return (
    <PickWrap>
      <TitleButton>
        <Link to="/pick-bread-breadShop?menu=breadShop">
          <span className={query.menu === 'breadShop' ? 'breadShop_active' : ''}>빵집</span>
        </Link>
        <Link to="/pick-bread-breadShop?menu=bread">
          <span className={query.menu === 'bread' ? 'bread_active' : ''}>빵</span>
        </Link>
      </TitleButton>
      {query.menu === 'breadShop' ? <PickBreadShop location={location} history={history} /> : <PickBread location={location} history={history} />}
    </PickWrap>
  );
};

PickBreadBreadShop.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.number.isRequired
};

export default PickBreadBreadShop;
