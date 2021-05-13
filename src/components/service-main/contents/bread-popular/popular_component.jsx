import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import BreadLi from '../../../common-component/bread_li_component';
import { selectBreadList } from '../../../redux/breadlist/bread.selectors';
import { setBreadRankingList, setHeartTrueData, setHeartFalseData } from '../../../redux/breadlist/bread.actions';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import { PopularBreadWrap, PopularWrap, BreadList } from './popular_style';

/**
 * @author 송지수
 * @email tndms951@naver.com
 * @create date 2021-04-21
 * @modify date 2021-04-21
 * @desc [bread컴포넌트]
 */

const PopularBread = ({ breadList, onBreadList, onBreadHeartTrue, onBreadHeartFalse }) => {
  useEffect(() => {
    async function fetchbreadData() {
      try {
        const { status, data: breadData } = await axios.get('/bread');

        if (status === 200) {
          onBreadList(breadData.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchbreadData();
  }, []);

  return (
    <PopularBreadWrap>
      <PopularWrap>
        <h1>요즘 인기있는 빵</h1>
      </PopularWrap>

      <BreadList>
        <ul className="list_wrap">
          {breadList.map((list) => (
            <Link to={`/rank/bread/detail/${list.id}`} key={`bread-list${list.id}`}>
              <BreadLi breadList={list} likeTrue={onBreadHeartTrue} likeFalse={onBreadHeartFalse} />
            </Link>
          ))}
        </ul>
      </BreadList>
    </PopularBreadWrap>
  );
};

PopularBread.propTypes = {
  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onBreadHeartTrue: PropTypes.func.isRequired,
  onBreadHeartFalse: PropTypes.func.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadList: selectBreadList
});

const breadDispathchToProps = (dispatch) => ({
  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onBreadHeartTrue: (trueBread) => dispatch(setHeartTrueData(trueBread)),
  onBreadHeartFalse: (falseBreadId) => dispatch(setHeartFalseData(falseBreadId))
});

export default connect(breadStateToProps, breadDispathchToProps)(PopularBread);
