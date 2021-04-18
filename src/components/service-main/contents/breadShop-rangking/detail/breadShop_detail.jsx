import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import { HouseDetaile, Grade, ShopImage, Information, ReviewWrap, Review, ReviewButton, Register, ReviewBox, BoxButton, BoxLeft, Content, UserImage, OtherBread, BreadShopList, Comment, CommentBox, AuthorComment, ReComment } from './breadShop_detail_style';
import axios from '../../../../../utils/axios';
import BreadShopLi from '../../../../common-component/breadShop_li_component';
import { selectShopBread, selectShopImages, selectShopMenuImages, selectShopHolidays, selectShopAddress, selectShopInfo } from '../../../../redux/breadshop/detail/breadShopDetail.selectors';
import { setCurrentBreadShopDetail, setShopDetailTrue, setShopDetailFalse } from '../../../../redux/breadshop/detail/breadShopDetail.actions';
import { selectShopReview } from '../../../../redux/breadshop/review/review.selectors';
import { setBreadShopReview } from '../../../../redux/breadshop/review/review.actions';

import { errorhandler } from '../../../../../utils/common';

// eslint-disable-next-line no-unused-vars
const ShopDetail = ({ shopDetailBread, shopDetailImages, shopDetailMenuImages, shopDetailHolidays, shopDetailAddress, shopDetailInfo, onShopDetailBread, match, onDetailTrue, onDetailFalse, onDetailReview, shopDetailReview }) => {
  console.log(shopDetailBread);
  console.log(shopDetailImages);
  console.log(shopDetailMenuImages);
  console.log(shopDetailHolidays);
  console.log(shopDetailAddress);
  console.log(shopDetailReview);
  console.log(shopDetailReview);

  useEffect(() => {
    async function fetchDetailData() {
      try {
        const { breadShopId } = match.params;
        console.log(breadShopId);

        const { status, data: detaileData } = await axios.get(`/bread/shop/${breadShopId}`);
        console.log(detaileData);
        console.log(detaileData.data.id);
        if (status === 200) {
          onShopDetailBread(detaileData.data);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    async function fetchDetailReview() {
      try {
        const { breadShopId } = match.params;
        const { status, data } = await axios.get(`/review/${breadShopId}`);
        if (status === 200) {
          onDetailReview(data.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchDetailData();
    fetchDetailReview();
  }, []);

  // Material UI
  const useStyles = makeStyles({
    reviewBox: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: 500,
      height: 500,
      padding: 40
    },
    reviewInput: {
      width: 450,
      height: 200,
      border: '1px solid #dbdbdb'
    },

    inputText: {
      opacity: 0,
      width: 90,
      height: 90,
      position: 'absolute',
      display: 'block',
      cursor: 'pointer',
      marginTop: 20,
      zIndex: 1000
    },

    reviewText: {
      color: '#fb7819',
      fontSize: '28px'
    },
    reviewTexted: {
      color: '#383838',
      fontSize: '16px'
    },
    button: {
      display: 'block',
      marginTop: 20,
      border: '1px dashed #DBDBDB',
      cursor: 'pointer',
      width: 90,
      height: 90,
      position: 'absolute',
      opacity: 1,
      transform: 'scale(1)',
      background: 'transparent'
    },
    addImage: {
      display: 'block',
      margin: '0 auto',
      width: 27,
      height: 27,
      backgroundImage: 'url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/plus_icon.svg)',
      backgroundSize: 'cover'
    }
  });

  const classes = useStyles();

  // 모달 handleClick
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const onDetailHeart = async () => {
    try {
      if (shopDetailInfo.like) {
        const { status: detailStatus } = await axios.delete(`/bread/shop/favorite/${shopDetailInfo.id}`);
        if (detailStatus === 200) {
          onDetailFalse();
        }
      } else {
        const { status } = await axios.post(`/bread/shop/favorite/${shopDetailInfo.id}`);
        if (status === 200) {
          onDetailTrue();
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <HouseDetaile>
      <Grade>
        <h1>
          빵집 이름 <span className="text_color">(평점)</span>
        </h1>

        <img
          src={shopDetailInfo?.like ? 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/heart.png' : 'https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png'}
          alt="빈하트 이미지"
          onClick={onDetailHeart}
          aria-hidden="true"
        />
      </Grade>
      <ShopImage>
        <img src={shopDetailImages} alt="" />
        <Information>
          <div>주소</div>
          <p>{shopDetailAddress ? shopDetailAddress.address : ''}</p>
        </Information>
        <Information>
          <div>전화번호</div>
          <p>{shopDetailInfo ? shopDetailInfo.storeNumber : ''}</p>
        </Information>
        <Information>
          <div>주차</div>
          {/* eslint-disable-next-line no-nested-ternary */}
          <p>{shopDetailInfo ? (shopDetailInfo.parkongEnabled ? '가능' : '불가능') : ''}</p>
        </Information>
        <Information>
          <div>영업시간</div>
          <p>{shopDetailInfo ? shopDetailInfo.openTime : ''}</p>
        </Information>
        <Information>
          <div>홈페이지</div>
          <p>{shopDetailInfo ? shopDetailInfo.link : ''}</p>
        </Information>
      </ShopImage>

      <ReviewWrap>
        <Review>
          <h1>리뷰</h1>
        </Review>
        <Register>
          <span onClick={handleOpen} aria-hidden="true" role="button">
            리뷰쓰기
          </span>
        </Register>
      </ReviewWrap>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.reviewBox}>
          <div className={classes.reviewText}>
            지수빵집 <span className={classes.reviewTexted}>리뷰를 써주세요</span>
          </div>

          <input type="text" placeholder="지수빵집에 대한 분위기와 맛은 어떤가요?" className={classes.reviewInput} />
          <input type="file" id="file" className={classes.inputText} />
          <button type="button" className={classes.button}>
            <i className={classes.addImage} />
          </button>

          <ReviewButton>
            <span>취소</span>
            <span>리뷰올리기</span>
          </ReviewButton>
        </DialogTitle>
      </Dialog>

      {shopDetailReview.map((review) => (
        <ReviewBox>
          <BoxButton>
            <BoxLeft>
              <>
                <img src="" alt="" />
                <p>{review.user.name}</p>
                <p>{review.createdAt}</p>
              </>
            </BoxLeft>
          </BoxButton>

          <Content>
            <p style={{ whiteSpace: 'pre-line' }}>{review.content}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: review.content.replace(/(?:\r\n|\r|\n)/g, '<br />') }} /> */}
          </Content>

          {review.images.map((reviewImage) => {
            console.log(reviewImage);
            return (
              <UserImage>
                <img src={reviewImage} alt="" />
              </UserImage>
            );
          })}
        </ReviewBox>
      ))}

      <Comment>
        <CommentBox>
          <input type="text" placeholder="댓글을 입력해 주세요." />
        </CommentBox>

        <AuthorComment>
          <img src="" alt="" />
          <p>UserName</p>
          <span>빵이 넘나 맛있어요~~~</span>
          <div className="date_wrap">
            <span>2020.03.16</span>
            <span className="made_comment">댓글달기</span>
          </div>
        </AuthorComment>

        <ReComment>
          <input type="text" placeholder="댓글을 입력해 주세요." />
          {/* <img src="" alt="" />
          <p>UserName2</p>
          <span className="date">2020.03.16</span>
          <span>오 무슨 맛인가요~?~~~</span> */}
        </ReComment>
      </Comment>

      <OtherBread>
        <h1>빵 랭킹</h1>
        <div className="all_show">
          <span>모두보기</span>
          <span className="triangle" />
        </div>
      </OtherBread>

      <BreadShopList>
        <ul className="list_wrap">
          {shopDetailBread.map((breadShopData) => (
            <BreadShopLi key={`bread_shop_list${breadShopData.id}`} shopList={breadShopData} shopImage={breadShopData.image} shopSeverLike={breadShopData.like} shopId={breadShopData.id} />
          ))}
        </ul>
      </BreadShopList>
    </HouseDetaile>
  );
};

ShopDetail.propTypes = {
  shopDetailBread: PropTypes.instanceOf(Array).isRequired,
  onShopDetailBread: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailImages: PropTypes.instanceOf(Array).isRequired,
  shopDetailMenuImages: PropTypes.instanceOf(Array).isRequired,
  shopDetailHolidays: PropTypes.instanceOf(Array).isRequired,
  shopDetailAddress: PropTypes.instanceOf(Object),
  shopDetailInfo: PropTypes.instanceOf(Object),
  onDetailTrue: PropTypes.func.isRequired,
  onDetailFalse: PropTypes.func.isRequired,
  onDetailReview: PropTypes.instanceOf(Object).isRequired,
  shopDetailReview: PropTypes.instanceOf(Array).isRequired
};

// 초기값이 없거나 null인 경우 예외처리
ShopDetail.defaultProps = {
  shopDetailAddress: null,
  shopDetailInfo: null
};

const breadShopStateToProps = createStructuredSelector({
  shopDetailBread: selectShopBread,
  shopDetailImages: selectShopImages,
  shopDetailMenuImages: selectShopMenuImages,
  shopDetailHolidays: selectShopHolidays,
  shopDetailAddress: selectShopAddress,
  shopDetailInfo: selectShopInfo,
  shopDetailReview: selectShopReview
});

const breadShopDetaileDispathch = (dispatch) => ({
  onShopDetailBread: (DetailList) => dispatch(setCurrentBreadShopDetail(DetailList)),
  onDetailTrue: () => dispatch(setShopDetailTrue()),
  onDetailFalse: () => dispatch(setShopDetailFalse()),
  onDetailReview: (review) => dispatch(setBreadShopReview(review))
});

export default connect(breadShopStateToProps, breadShopDetaileDispathch)(ShopDetail);
