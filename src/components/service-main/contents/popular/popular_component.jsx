import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BreadLi from '../../../common-component/bread_li_component';
import { selectBreadList } from '../../../redux/breadlist/bread.selectors';
import { setBreadRankingList, setHeartTrueData } from '../../../redux/breadlist/bread.actions';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import { PopularBreadWrap, PopularWrap, BreadList } from './popular_style';

const PopularBread = ({ breadList, onBreadList, onHeartFilled }) => {
  useEffect(() => {
    async function fetchbreadData() {
      try {
        const { status, data: breadData } = await axios.get('/bread');
        console.log(status);
        onBreadList(breadData.list);
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
          {breadList.map((breadData) => (
            <BreadLi breadData={breadData} onHeartFilled={onHeartFilled} />
          ))}
        </ul>
      </BreadList>
    </PopularBreadWrap>
  );
};

PopularBread.propTypes = {
  breadList: PropTypes.instanceOf(Array).isRequired,
  onBreadList: PropTypes.func.isRequired,
  onHeartFilled: PropTypes.func.isRequired
};

const breadStateToProps = createStructuredSelector({
  breadList: selectBreadList
});

const breadDispathchToProps = (dispatch) => ({
  onBreadList: (bread) => dispatch(setBreadRankingList(bread)),
  onHeartFilled: (filled, heartId) => dispatch(setHeartTrueData(filled, heartId))
});

export default connect(breadStateToProps, breadDispathchToProps)(PopularBread);
