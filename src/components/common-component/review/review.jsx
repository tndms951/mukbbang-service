import React, { useState, useRef, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import moment from 'moment';

import { selectShopReview } from '../../redux/breadshop/review/review.selectors';
import { setBreadShopReview, setShopReviewWriting } from '../../redux/breadshop/review/review.actions';
import { ReviewWrapBox, ReviewWrap, ReviewText, Register, RegisterReviewWrap, RegisterReview, ImageMap, ImageWrap, CloseWrap, ReviewButton, ReviewSlid, ReviewBox, BoxButton, BoxLeft, Content, UserImage, ReviewModal } from './review_style';
import axios from '../../../utils/axios';
import { errorhandler, sweetAlert } from '../../../utils/common';

const Review = ({ match, shopDetailReview, onDetailReview, onDetailReviewWriting, shopDetailInfo }) => {
  const { breadShopId } = match;

  // 리뷰등록
  const [writingReview, setWritingReview] = useState({
    text: ''
  });

  const [writingImage, setWritingImage] = useState([]);

  // 모달 이미지(매개변수받아옴)
  const [modalImage, setModalImage] = useState([]);

  // 리뷰 등록시 모달
  const [openModal, setOpenModal] = useState(false);

  // 등록후 이미지클릭 모달
  const [modalOpen, setModalOpen] = useState(false);

  const el = useRef();

  const { text } = writingReview;

  useEffect(() => {
    async function fetchDetailReview() {
      try {
        const { status, data: reviewData } = await axios.get(`/review/${breadShopId}`);

        if (status === 200) {
          onDetailReview(reviewData.list);
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchDetailReview();
  }, []);

  const reviewOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = 'hidden';
  };
  const reviewCloseModal = () => {
    setOpenModal(false);
    document.body.style.removeProperty('overflow');
  };

  // 오픈 모달
  const opneModal = (reviewImage) => {
    setModalOpen(true);
    setModalImage(reviewImage);
    document.body.style.overflow = 'hidden';
  };

  // 클로짓 모달
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  // 리뷰등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageLists = [];
      for (let i = 0; i < writingImage.length; i += 1) {
        imageLists.push(writingImage[i].imageUrl);
      }
      const reviewObject = {
        content: writingReview.text,
        imageUrl: imageLists
      };

      const { status, data } = await axios.post(`/review/${breadShopId}`, reviewObject);
      if (status === 201) {
        onDetailReviewWriting(data.data);
        setWritingReview({
          text: ''
        });
        setWritingImage([]);
        setOpenModal(false);
        document.body.style.removeProperty('overflow');
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const resetButton = (index) => {
    const deleteImageList = [...writingImage];
    deleteImageList.splice(index, 1);
    setWritingImage(deleteImageList);
  };

  const handleChange = (e) => {
    setWritingReview({
      ...writingReview,
      [e.target.name]: e.target.value
    });
  };

  // 이미지 핸들체인지
  const imageHandleChange = async (e) => {
    try {
      const { files } = e.target;

      const imageLength = files.length + writingImage.length;
      if (imageLength > 6) {
        sweetAlert('이미지를 초과했습니다.');
      }

      const imageFormData = new FormData();
      for (let i = 0; i < files.length; i += 1) {
        imageFormData.append('imgFile', e.target.files[i]);
      }

      const { status, data: imageData } = await axios.post('/upload/review', imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (status === 200) {
        const {
          data: { imageUrl: newImageUrlList }
        } = imageData;

        const newimageList = [];
        newImageUrlList.forEach((image) => {
          const newImage = {
            imageUrl: image
          };
          newimageList.push(newImage);
        });
        setWritingImage([...writingImage, ...newimageList]);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <ReviewWrapBox>
      <ReviewWrap>
        <ReviewText>
          <h1>리뷰</h1>
        </ReviewText>
        <Register>
          <span onClick={reviewOpenModal} aria-hidden="true" role="button">
            리뷰쓰기
          </span>
        </Register>
      </ReviewWrap>

      <RegisterReviewWrap>
        {openModal && (
          <RegisterReview ref={el} aria-hidden="true">
            <div className="review_modal_wrap" onClick={reviewCloseModal} aria-hidden="true" />
            <div className="review_modal">
              <div className="title">
                {shopDetailInfo.title} <span className="title_text">리뷰를 작성해 주세요</span>
              </div>

              <div className="review_form_modal">
                <form onSubmit={handleSubmit}>
                  <textarea placeholder="지수빵집에 대한 분위기와 맛은 어떤가요?" onChange={handleChange} value={text} name="text" />

                  <ImageMap>
                    {writingImage.map((imageData, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <ImageWrap key={`image-${index}`}>
                        <div>
                          <img src={imageData.imageUrl} alt={`리뷰 사진${index}`} className="review_image" />
                          <div className="bread_button_wrap" onClick={() => resetButton(index)} aria-hidden="true">
                            <CloseWrap>
                              <div className="image_close_container1">
                                <div id="image_close_menu">
                                  <span />
                                  <span />
                                </div>
                              </div>
                            </CloseWrap>
                          </div>
                        </div>
                      </ImageWrap>
                    ))}
                  </ImageMap>

                  <input type="file" id="file" onChange={imageHandleChange} name="reviewImage" multiple />
                  <button type="button" className="file_button">
                    <i />
                  </button>

                  <ReviewButton>
                    <button type="button" onClick={reviewCloseModal} className="reviewButton">
                      취소
                    </button>
                    <button type="submit" className="reviewButton">
                      리뷰올리기
                    </button>
                  </ReviewButton>
                </form>
              </div>
            </div>
          </RegisterReview>
        )}
      </RegisterReviewWrap>

      <ReviewSlid>
        {shopDetailReview.length ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Slider {...settings}>
            {shopDetailReview.map((review) => (
              <ReviewBox key={`review-${review.id}`}>
                <BoxButton>
                  <BoxLeft>
                    <div className="button_wrap">
                      <div className="user_wrap">
                        <img src={review.user.imageUrl} alt="" />
                        <p>{review.user.name}</p>
                        <p>{moment(review.createdAt).format('YYYY-MM-DD')}</p>
                      </div>
                    </div>
                  </BoxLeft>
                </BoxButton>

                <Content>
                  <p style={{ whiteSpace: 'pre-line' }}>{review.content}</p>
                  {/* html을 바로 넣는 방법 */}
                  {/* <div dangerouslySetInnerHTML={{ __html: review.content.replace(/(?:\r\n|\r|\n)/g, '<br />') }} /> */}
                </Content>

                {review.images.map((reviewImage, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <UserImage key={`reviewimage-${review.id}-${index}`}>
                    <button type="button" onClick={() => opneModal(review.images)}>
                      <img src={reviewImage} alt={`리뷰 이미지${index}`} />
                    </button>
                  </UserImage>
                ))}
              </ReviewBox>
            ))}
          </Slider>
        ) : (
          <div className="background_wrap">등록된 리뷰가 없습니다.</div>
        )}
      </ReviewSlid>

      <ReviewModal>
        {modalOpen && (
          <>
            <div className="Modal-overlay" ref={el} onClick={closeModal} aria-hidden="true" />
            <div className="Modal">
              <div>
                <p className="title">리뷰 이미지</p>
              </div>
              <div className="content">
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Slider {...settings}>
                  {modalImage.map((images, index) => (
                    <img src={images} alt={`리뷰사진${index}`} key={`modalImage-${images}`} className="modal_image" />
                  ))}
                </Slider>
              </div>
              <div className="button-wrap">
                <button type="button" onClick={closeModal}>
                  취소
                </button>
              </div>
            </div>
          </>
        )}
      </ReviewModal>
    </ReviewWrapBox>
  );
};

Review.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailReview: PropTypes.instanceOf(Array).isRequired,
  onDetailReview: PropTypes.func.isRequired,
  onDetailReviewWriting: PropTypes.func.isRequired,
  shopDetailInfo: PropTypes.instanceOf(Object).isRequired
};

const shopReviewStateToProps = createStructuredSelector({
  shopDetailReview: selectShopReview
});

const shopReviewDispatch = (dispatch) => ({
  onDetailReview: (review) => dispatch(setBreadShopReview(review)),
  onDetailReviewWriting: (writing) => dispatch(setShopReviewWriting(writing))
});

export default connect(shopReviewStateToProps, shopReviewDispatch)(Review);
