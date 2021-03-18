import React, { useEffect } from 'react';
import Youtube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/swiper.scss';

import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

import { BreadPickWrap, YoutubePickEvent, PickBreadTitle, PickBreadImage, Aaa } from './youtube_bread_style';

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

  return (
    <BreadPickWrap>
      <YoutubePickEvent />

      <PickBreadTitle>
        <span>유튜버들이 선택한 빵을 즐겨보세요</span>
      </PickBreadTitle>

      <Swiper
        navigation
        pagination={{
          clickable: true
        }}
        scrollbar={{
          draggable: true
        }}
      >

        <Aaa>
          <SwiperSlide>
            <PickBreadImage>
              <Youtube className="youtubeVideo" videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
              <div className="pick_title">
                <span>Title</span>
                <span>Description</span>
                <button type="button" className="show_button">리뷰 보러가기</button>
              </div>
            </PickBreadImage>
            <PickBreadImage>
              <Youtube className="youtubeVideo" videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
              <div className="pick_title">
                <span>Title</span>
                <span>Description</span>
                <button type="button" className="show_button">리뷰 보러가기</button>
              </div>
            </PickBreadImage>
            <PickBreadImage>
              <Youtube className="youtubeVideo" videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
              <div className="pick_title">
                <span>Title</span>
                <span>Description</span>
                <button type="button" className="show_button">리뷰 보러가기</button>
              </div>
            </PickBreadImage>
          </SwiperSlide>
        </Aaa>

      </Swiper>
    </BreadPickWrap>
  );
};

export default PickBread;
