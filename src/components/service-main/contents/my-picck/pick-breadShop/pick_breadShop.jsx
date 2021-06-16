import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { errorhandler } from 'utils/common';
import BreadShopLi from '../../../../common-component/breadShop_li_component';
// import { setPickBreadShopList } from '../../../../redux/my-pick/pick_bread_breadShop.actions';
// import { selectPickBreadShop } from '../../../../redux/my-pick/pick_bread_breadShop.selectors';
import { setCurrentBreadShopMore, setShopTrueData, setShopFalseData } from '../../../../redux/breadshop/list/breadShop.actions';
import { selectShopList } from '../../../../redux/breadshop/list/breadShop.selectors';
import { BreadPickList } from './pick_breadShop_style';
import axios from '../../../../../utils/axios';

const PickBreadShop = ({ breadShopList, onBreadShopList, onBreadShopTrue, onBreadShopFalse }) => {
  console.log(breadShopList);
  useEffect(() => {
    async function fetchPickBreadShop() {
      try {
        const { status, data } = await axios.get('/user/bread/shop');
        if (status === 200) {
          onBreadShopList(data.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchPickBreadShop();
  }, []);

  return (
    <BreadPickList>
      <ul className="list_wrap">
        {breadShopList.map((list) => (
          <BreadShopLi key={`pick-breadShop-list${list.id}`} shopList={list} shopSeverLike={list.like} shopId={list.id} likeTrue={onBreadShopTrue} likeFalse={onBreadShopFalse} />
        ))}
      </ul>
    </BreadPickList>
  );
};

PickBreadShop.propTypes = {
  onBreadShopList: PropTypes.func.isRequired,
  breadShopList: PropTypes.instanceOf(Object).isRequired,
  // pickBreadShop: PropTypes.instanceOf(Object).isRequired,
  onBreadShopTrue: PropTypes.func.isRequired,
  onBreadShopFalse: PropTypes.func.isRequired
};

const pickStateToProps = createStructuredSelector({
  // pickBreadShop: selectPickBreadShop,
  breadShopList: selectShopList
});

const pickDispathch = (dispatch) => ({
  onBreadShopList: (list) => dispatch(setCurrentBreadShopMore(list)),

  onBreadShopTrue: (trueBreadShop) => dispatch(setShopTrueData(trueBreadShop)),
  onBreadShopFalse: (falseBreadShop) => dispatch(setShopFalseData(falseBreadShop))
});

export default connect(pickStateToProps, pickDispathch)(PickBreadShop);
