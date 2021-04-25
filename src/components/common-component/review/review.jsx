/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { ReviewWrapBox, ReviewWrap, ReviewText, Register, ImageMap, ImageWrap, CloseWrap, ReviewButton, ReviewSlid, ReviewBox, BoxButton, BoxLeft, Content, UserImage, ReviewModal } from './review_style';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';

const Review = ({ breadShopId, shopDetailReview, onDetailReview, onDetailReviewWriting, history }) => {
  console.log(shopDetailReview);
  console.log(onDetailReview);
  console.log(onDetailReviewWriting);
  console.log(history);
  // 리뷰등록
  const [writingReview, setWritingReview] = useState({
    text: ''
  });
  console.log(writingReview);

  const [writingImage, setWritingImage] = useState([]);
  console.log(writingImage);

  const { text } = writingReview;

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

  // Material UI
  const useStyles = makeStyles({
    reviewBox: {
      width: 500,
      height: 500,
      padding: 40
    },
    reviewInput: {
      width: 450,
      height: 200,
      border: '1px solid #dbdbdb',
      padding: 13,
      resize: 'none',
      outline: 'none'
    },

    inputText: {
      opacity: 0,
      width: 90,
      height: 90,
      position: 'absolute',
      display: 'inline',
      cursor: 'pointer',
      marginTop: 20,
      zIndex: 100
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
      marginRight: 100,
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

  // 리뷰등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const arr = [];
      console.log(arr);
      for (let i = 0; i < writingImage.length; i += 1) {
        arr.push(writingImage[i].imageUrl);
      }
      const reviewObject = {
        content: writingReview.text,
        imageUrl: arr
      };
      console.log('wowo');
      const { status, data } = await axios.post(`/review/${breadShopId}`, reviewObject);
      console.log(status);
      console.log(data);
      if (status === 201) {
        console.log('aaaaa');
        onDetailReviewWriting(data.data);
        // history.push(`/rank/bread-house/detail/${breadShopId}`);
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
      console.log('abbbbbb');
    }
  };

  const goback = () => {
    history.goBack();
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
      console.log(imageData);
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
          <span onClick={handleOpen} aria-hidden="true" role="button">
            리뷰쓰기
          </span>
        </Register>
      </ReviewWrap>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.reviewBox}>
          <div className={classes.reviewText}>
            지수빵집 <span className={classes.reviewTexted}>리뷰를 작성해 주세요</span>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea placeholder="지수빵집에 대한 분위기와 맛은 어떤가요?" className={classes.reviewInput} onChange={handleChange} value={text} name="text" />

            <ImageMap>
              {writingImage.map((imageData, index) => (
                <ImageWrap>
                  <div key={`image-${index}`}>
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

            <input type="file" id="file" className={classes.inputText} onChange={ImagehandleChange} name="reviewImage" multiple />
            <button type="button" className={classes.button}>
              <i className={classes.addImage} />
            </button>

            <ReviewButton>
              <button type="button" onClick={goback}>
                취소
              </button>
              <button type="submit">리뷰올리기</button>
            </ReviewButton>
          </form>
        </DialogTitle>
      </Dialog>

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
                <button type="button" onClick={closeModal}>
                  X
                </button>
                <p className="title">Modal Title</p>
              </div>
              <div className="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel tempora nulla, non molestiae dicta ducimus. Et unde laborum eveniet ex quod doloribus quae, aliquam beatae atque, vero assumenda rem quo?</p>
              </div>
              <div className="button-wrap">
                <button> Confirm </button>
              </div>
            </div>
          </>
        )}
      </ReviewModal>
    </ReviewWrapBox>
  );
};

Review.propTypes = {
  breadShopId: PropTypes.instanceOf(Array).isRequired,
  shopDetailReview: PropTypes.instanceOf(Array).isRequired,
  onDetailReview: PropTypes.instanceOf(Array).isRequired,
  onDetailReviewWriting: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

export default Review;
