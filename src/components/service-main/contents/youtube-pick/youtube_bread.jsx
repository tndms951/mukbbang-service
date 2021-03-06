import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import qs from 'qs';
import { Helmet } from 'react-helmet';

import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import { BreadPickWrap, YoutubePickEvent, StyledSlider, PickBreadTitle, PickBreadOdd, PickBreadEven } from './youtube_bread_style';
import { setYoutubeList, setYoutubePagination } from '../../../redux/youtube/youtube.actions';
import { selectYoutubeList } from '../../../redux/youtube/youtube.selectors';
import LoadingHOC from '../../../common-component/loadingHOC';

const limit = 2;

const YoutubePickBread = ({ youtubePickBreadList, youtubePickList, location, youtubePagination, loading, isLoadingset }) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchyoutubeData() {
      isLoadingset(true);
      try {
        const { status, data } = await axios.get(`/youtube?page=${page}&limit=${limit}`);

        if (status === 200) {
          youtubePickList(data.list);
          setHasMore(data.pagination.currentPage !== data.pagination.totalPage);
          isLoadingset(false);
        }
      } catch (err) {
        errorhandler(err);
      }
    }

    fetchyoutubeData();
  }, []);

  const opts = {
    width: '553',
    height: '311',
    playerVars: {
      // autoplay: 1
    }
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  //   responsive: [
  //     // 반응형 웹 구현 옵션
  //     {
  //       breakpoint: 1200, // 화면 사이즈 1200px
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // };

  // 스크롤(pagination)
  const fetMoreData = async () => {
    try {
      const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });

      const queryObject = { ...query };
      queryObject.page = String(page + 1);
      queryObject.limit = String(limit);
      const queryData = qs.stringify(queryObject);
      const { status, data } = await axios.get(`/youtube?${queryData}`);
      if (status === 200) {
        youtubePagination(data.list);
        setPage(page + 1);
        if (data.pagination.currentPage === data.pagination.totalPage) {
          setHasMore(false);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>먹빵-우리동네빵집 유튜버</title>
        <meta name="description" content="먹빵-우리동네빵집 유튜버 페이지 입니다." />
        <meta property="og:title" content="먹빵-우리동네빵집 유튜버 페이지 입니다." />
        <meta property="og:description" content="먹빵-우리동네빵집 유튜버 페이지 입니다." />
        <meta property="og:image" content="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/logo/logo.png" />
      </Helmet>
      {!loading && (
        <BreadPickWrap>
          <YoutubePickEvent>
            <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/review.png" alt="" />
          </YoutubePickEvent>

          <PickBreadTitle>
            <span>유튜버들이 선택한 빵을 즐겨보세요</span>
          </PickBreadTitle>

          <StyledSlider>
            {/* @ts-ignore */}
            <InfiniteScroll dataLength={youtubePickBreadList.length} next={fetMoreData} hasMore={hasMore} scrollThreshold="50px">
              {youtubePickBreadList.map((list, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={`유튜브-${index}`}>
                  {index % 2 === 0 ? (
                    <PickBreadOdd>
                      <div className="VideoContainer">
                        <Youtube className="youtubeVideo" videoId={list.link.replace('https://www.youtube.com/embed/', '')} opts={opts} onReady={onReady} />
                      </div>

                      <div className="pick_title">
                        <span>{list?.title}</span>
                        <span>{list?.content}</span>
                        <button type="button" className="show_button">
                          <a href={list?.link} target="_blank" rel="noreferrer">
                            리뷰 보러가기
                          </a>
                        </button>
                      </div>
                    </PickBreadOdd>
                  ) : (
                    <PickBreadEven>
                      <div className="VideoContainer_even">
                        <Youtube className="youtubeVideo_even" videoId={list.link.replace('https://www.youtube.com/embed/', '')} opts={opts} onReady={onReady} />
                      </div>
                      <div className="pick_title_even">
                        <span>{list.title}</span>
                        <span>{list.content}</span>
                        <button type="button" className="show_button_even">
                          <a href={list?.link} target="_blank" rel="noreferrer">
                            리뷰 보러가기
                          </a>
                        </button>
                      </div>
                    </PickBreadEven>
                  )}
                </React.Fragment>
              ))}
            </InfiniteScroll>
          </StyledSlider>
        </BreadPickWrap>
      )}
    </>
  );
};

YoutubePickBread.defaultProps = {
  youtubePickBreadList: null
};

YoutubePickBread.propTypes = {
  youtubePickBreadList: PropTypes.instanceOf(Object),
  youtubePickList: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  youtubePagination: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoadingset: PropTypes.func.isRequired
};

const youtubePickStateToProps = createStructuredSelector({
  youtubePickBreadList: selectYoutubeList
});

const youtubePickDispathch = (dispatch) => ({
  youtubePickList: (list) => dispatch(setYoutubeList(list)),
  youtubePagination: (list) => dispatch(setYoutubePagination(list))
});

export default connect(youtubePickStateToProps, youtubePickDispathch)(LoadingHOC(YoutubePickBread, <div className="loading_title">유튜버 픽빵 페이지 입니다.</div>));
