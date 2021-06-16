import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import qs from 'qs';

import PickBreadShop from './pick-breadShop/pick_breadShop';
import PickBread from './pick-bread/pick_bread';
import { PickWrap, TitleButton } from './pick_bread_breadShop_style';

const PickBreadBreadShop = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  console.log(query);
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
      {query.menu === 'breadShop' ? <PickBreadShop /> : <PickBread />}
    </PickWrap>
  );
};

PickBreadBreadShop.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default PickBreadBreadShop;
