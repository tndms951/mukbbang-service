import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { HouseDetaile, Grade, ShopImage, Information, Review, ReviewBox, BoxButton, BoxLeft, BoxRight, Content, UserImage, OtherBreadShop, BreadShopList } from './breadhouse_detaile_style';
import axios from '../../../../../utils/axios';
import BreadShopLi from '../../../../common-component/breadShop_li_component';
import { selectShopListDetaile } from '../../../../redux/breadshop/detaile/breadShopDetaile.selectors';
import { setCurrentBreadShopDetaile } from '../../../../redux/breadshop/detaile/breadShopDetaile.actions';

import { errorhandler } from '../../../../../utils/common';

const ShopDetaile = ({ ShopDetaileList, onShopDetaileList, match }) => {
  useEffect(() => {
    async function fetchDetailData() {
      try {
        const { breadShopId } = match.params;

        const { status, data } = await axios.get(`/bread/shop/${breadShopId}`);

        if (status === 200) {
          onShopDetaileList(data.data);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchDetailData();
  }, []);
  return (
    <HouseDetaile>
      <Grade>
        <h1>
          빵집 이름 <span className="text_color">(평점)</span>
        </h1>
        <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png" alt="빈하트 이미지" />
      </Grade>
      <ShopImage>
        <span />

        <Information>
          <div>주소</div>
          <p>Description</p>
        </Information>
        <Information>
          <div>전화번호</div>
          <p>010-0000-0000</p>
        </Information>
        <Information>
          <div>음식종류</div>
          <p>Description</p>
        </Information>
        <Information>
          <div>가격</div>
          <p>Description</p>
        </Information>
        <Information>
          <div>주차</div>
          <p>Description</p>
        </Information>
        <Information>
          <div>영업시간</div>
          <p>Description</p>
        </Information>
        <Information>
          <div>홈페이지</div>
          <p>www.naver.com</p>
        </Information>
      </ShopImage>

      <Review>
        <h1>리뷰</h1>
      </Review>

      <ReviewBox>
        <BoxButton>
          <BoxLeft>
            <img src="" alt="" />
            <p>User</p>
            <p>2020.12.29</p>
          </BoxLeft>

          <BoxRight>
            <button type="submit">좋아요</button>
            <button type="submit">별로예요</button>
          </BoxRight>
        </BoxButton>

        <Content>
          <p>어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~123445566778900</p>
          <p>어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~123445566778900</p>
          <p>어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~어쩌구저쩌구~~123445566778900</p>
        </Content>

        <UserImage>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </UserImage>
      </ReviewBox>

      <OtherBreadShop>
        <h1>빵집 랭킹</h1>
        <div className="all_show">
          <span>모두보기</span>
          <span className="triangle" />
        </div>
      </OtherBreadShop>

      <BreadShopList>
        <ul className="list_wrap">
          {ShopDetaileList.map((breadShopData) => (
            <BreadShopLi key={`bread_shop_list${breadShopData.id}`} shopList={breadShopData} shopImage={breadShopData.image} shopSeverLike={breadShopData.like} shopId={breadShopData.id} />
          ))}
        </ul>
      </BreadShopList>
    </HouseDetaile>
  );
};

ShopDetaile.propTypes = {
  ShopDetaileList: PropTypes.instanceOf(Array).isRequired,
  onShopDetaileList: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired
};

const breadShopStateToProps = createStructuredSelector({
  ShopDetaileList: selectShopListDetaile
});

const breadShopDetaileDispathch = (dispatch) => ({
  onShopDetaileList: (DetaileList) => dispatch(setCurrentBreadShopDetaile(DetaileList))
});

export default connect(breadShopStateToProps, breadShopDetaileDispathch)(ShopDetaile);
