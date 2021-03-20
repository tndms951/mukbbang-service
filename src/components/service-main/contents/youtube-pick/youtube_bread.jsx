import React, { useEffect } from 'react';
import Youtube from 'react-youtube';
// import { Swiper } from 'swiper/react';
// import 'swiper/css/swiper.scss';

import Slider from 'react-slick';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

import {
  BreadPickWrap,
  YoutubePickEvent,
  StyledSlider,
  PickBreadTitle,
  PickBreadImage
} from './youtube_bread_style';

const PickBread = () => {
  useEffect(() => {
    async function fetchyoutubeData() {
      try {
        const { status, data } = await axios.get('/admin/youtube');
        console.log(status);
        console.log(data);
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchyoutubeData();
  }, []);
  const opts = {
    width: '300',
    height: '300',
    playerVars: {
      autoplay: 1
    }
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  // 슬라이드
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <BreadPickWrap>
      <YoutubePickEvent />

      <PickBreadTitle>
        <span>유튜버들이 선택한 빵을 즐겨보세요</span>
      </PickBreadTitle>

      {/* <Swiper
        navigation
        pagination={{
          clickable: true
        }}
        scrollbar={{
          draggable: true
        }}> */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <StyledSlider>
          <PickBreadImage>
            <div className="VideoContainer">
              <Youtube
                className="youtubeVideo"
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={onReady}
              />
            </div>
            <div className="pick_title">
              <span>Title</span>
              <span>Description</span>
              <button type="button" className="show_button">
                리뷰 보러가기
              </button>
            </div>
          </PickBreadImage>
          <PickBreadImage>
            <div className="VideoContainer">
              <Youtube
                className="youtubeVideo"
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={onReady}
              />
            </div>
            <div className="pick_title">
              <span>Title</span>
              <span>Description</span>
              <button type="button" className="show_button">
                리뷰 보러가기
              </button>
            </div>
          </PickBreadImage>
          <PickBreadImage>
            <div className="VideoContainer">
              <Youtube
                className="youtubeVideo VideoContainer"
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={onReady}
              />
            </div>
            <div className="pick_title">
              <span>Title</span>
              <span>Description</span>
              <button type="button" className="show_button">
                리뷰 보러가기
              </button>
            </div>
          </PickBreadImage>
        </StyledSlider>
      </Slider>
      {/* </Swiper> */}
    </BreadPickWrap>
  );
};

export default PickBread;
