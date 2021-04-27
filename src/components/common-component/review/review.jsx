/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { ReviewWrapBox, ReviewWrap, ReviewText, Register, RegisterReviewWrap, RegisterReview, ImageMap, ImageWrap, CloseWrap, ReviewButton, ReviewSlid, ReviewBox, BoxButton, BoxLeft, Content, UserImage, ReviewModal } from './review_style';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';

const Review = ({ breadShopId, shopDetailReview, onDetailReviewWriting }) => {
  console.log(onDetailReviewWriting);
  // 리뷰등록
  const [writingReview, setWritingReview] = useState({
    text: ''
  });

  const [writingImage, setWritingImage] = useState([]);

  const { text } = writingReview;

  // 리뷰 등록시 모달
  const [openModal, setOpenModal] = useState(false);

  const reviewOpenModal = () => {
    setOpenModal(true);
  };
  const reviewCloseModal = () => {
    setOpenModal(false);
  };

  // 등록후 이미지 모달
  const [modalOpen, setModalOpen] = useState(false);
  const el = useRef();

  // 오픈 모달
  const opneModal = () => {
    setModalOpen(true);
  };

  // 클로짓 모달
  const closeModal = () => {
    setModalOpen(false);
  };

  // 리뷰등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const arr = [];
      for (let i = 0; i < writingImage.length; i += 1) {
        arr.push(writingImage[i].imageUrl);
      }
      const reviewObject = {
        content: writingReview.text,
        imageUrl: arr
      };

      const { status, data } = await axios.post(`/review/${breadShopId}`, reviewObject);
      console.log(data);
      if (status === 201) {
        onDetailReviewWriting(data.data);
        setWritingReview({
          text: ''
        });
        setWritingImage([]);
        setOpenModal(false);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // const goback = () => {
  //   history.goBack();
  // };

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
  const ImagehandleChange = async (e) => {
    try {
      const { files } = e.target;

      const imageLength = files.length + writingImage.length;
      if (imageLength > 8) {
        alert('이미지를 초과했습니다.');
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
    // autoplay: true,
    speed: 500,
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
            <div className="aaa" onClick={reviewCloseModal} aria-hidden="true" />
            <div className="bbb">
              <div className="title">
                지수빵집 <span className="title_text">리뷰를 작성해 주세요</span>
              </div>

              <div className="ccc">
                <form onSubmit={handleSubmit}>
                  <textarea placeholder="지수빵집에 대한 분위기와 맛은 어떤가요?" onChange={handleChange} value={text} name="text" />

                  <ImageMap>
                    {writingImage.map((imageData, index) => (
                      <ImageWrap key={`image-${index}`}>
                        <div>
                          <img src={imageData.imageUrl} alt="이미지 사진" className="review_image" />
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

                  <input type="file" id="file" onChange={ImagehandleChange} name="reviewImage" multiple />
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
        <Slider {...settings}>
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

              {review.images.map((reviewImage) => (
                <UserImage>
                  <button type="button" onClick={opneModal}>
                    <img src={reviewImage} alt="리뷰 사진" />
                  </button>
                </UserImage>
              ))}
            </ReviewBox>
          ))}
        </Slider>
      </ReviewSlid>

      <ReviewModal>
        {modalOpen && (
          <>
            <div className="Modal-overlay" ref={el} onClick={closeModal} aria-hidden="true" />
            <div className="Modal">
              <div>
                <p className="title">리뷰클릭시 모달</p>
              </div>
              <div className="content">
                <p>이미지가 들어와야됨</p>
              </div>
              <div className="button-wrap">
                <button onClick={closeModal}> 취소 </button>
              </div>
            </div>
          </>
        )}
      </ReviewModal>
    </ReviewWrapBox>
  );
};

Review.propTypes = {
  breadShopId: PropTypes.number.isRequired,
  shopDetailReview: PropTypes.instanceOf(Array).isRequired,
  onDetailReviewWriting: PropTypes.func.isRequired
  // history: PropTypes.instanceOf(Object).isRequired
};

export default Review;
