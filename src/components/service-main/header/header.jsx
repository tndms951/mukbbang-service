/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBreadSlice, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import qs from 'qs';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setLogout } from '../../redux/user/user.actions';

import { HeaderWrap, BookMark, LeftBookMark, RightLogin, MyProfile, GroupNav, NaveSearch } from './header_style';

/**
 * @author 송지수
 * @email tndms951@naver.com
 * @create date 2021-03-21 15:42:55
 * @modify date 2021-03-21 15:42:55
 * @desc [header컴포넌트]
 */

const Header = ({ currentUser, onLogout }) => {
  const location = useLocation(); // 라우터가 없을때 라이브러리로 가져와서 사용하는것
  const history = useHistory(); // 라우터가 없을때 라이브러리로 가져와서 사용하는것

  const [myProfileBox, setMyProfileBox] = useState(false);
  const [search, setSearch] = useState(false);

  // 검색조회
  const [title, setTitle] = useState('');

  useEffect(() => {
    const query = qs.parse(location.search, {
      ignoreQueryPrefix: true
    });

    setTitle(query.title ? String(query.title) : '');
  }, [location.search]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const queryObject = {};

    if (title) {
      queryObject.title = title;
    }
    const queryData = qs.stringify(queryObject);
    history.push(`/bread-house${queryData ? `?${queryData}` : ''}`);
  };

  // 돋보기 클릭
  const handleClick = () => {
    setSearch(!search);
  };

  return (
    <>
      <HeaderWrap>
        <BookMark>
          <div className="bookmarkWrap clearfix">
            <LeftBookMark>
              <span>즐겨찾기</span>
              <span>입점신청</span>
              <span>
                <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/Vector+1.png" alt="아래화살표" />
              </span>
            </LeftBookMark>
            <RightLogin>
              {currentUser ? (
                <div
                  className="login_after"
                  onClick={() => {
                    setMyProfileBox(!myProfileBox);
                  }}
                  aria-hidden="true">
                  <span className="userName">{currentUser.name}</span>
                  <span className="userimage">
                    <img src={currentUser.imageUrl} alt={`${currentUser.name}의 이미지`} />
                  </span>
                  {myProfileBox ? (
                    <MyProfile>
                      <span>내가 찜한 빵/빵집</span>
                      <span>내 정보 수정</span>
                      <span onClick={onLogout} aria-hidden="true">
                        로그아웃
                      </span>
                    </MyProfile>
                  ) : null}
                </div>
              ) : (
                <div className="login_wrap">
                  <Link to="/signin">
                    <span className="login">로그인</span>
                  </Link>

                  <Link to="/signup">
                    <span className="signUp">회원가입</span>
                  </Link>
                </div>
              )}
            </RightLogin>
          </div>
        </BookMark>
        <GroupNav className="clearfix">
          <Link to="/">
            <h1>
              <img src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/Meokppang.png" alt="먹방로그" />
            </h1>
          </Link>
          <ul className="webSize">
            <Link to="/bread-house">
              <li className={location.pathname === '/bread-house' || location.pathname.indexOf('/bread-house/detail/') !== -1 ? 'clickMenu' : ''}>빵집 랭킹</li>
            </Link>
            <Link to="/bread">
              <li className={location.pathname === '/bread' || location.pathname.indexOf('/bread/detail/') !== -1 ? 'clickMenu' : ''}>요즘 인기있는 빵</li>
            </Link>
            <Link to="/youtube-bread">
              <li className={location.pathname === '/youtube-bread' ? 'clickMenu' : ''}>유튜버 픽빵</li>
            </Link>
            <Link to="/community?menu=notice">
              <li className={location.pathname === '/community' ? 'clickMenu' : ''}>커뮤니티</li>
            </Link>
          </ul>

          {/* 모바일 */}
          <div className="mobileBoxWrap">
            <ul className="mobileSize">
              <li className={location.pathname === '/bread-house' || location.pathname.indexOf('/bread-house/detail/') !== -1 ? 'clickIcons' : ''}>
                <Link to="/bread-house">
                  <FontAwesomeIcon icon={faStore} className="icons" />
                  <span>빵집 랭킹</span>
                </Link>
              </li>
              <li className={location.pathname === '/bread' || location.pathname.indexOf('/bread/detail/') !== -1 ? 'clickIcons' : ''}>
                <Link to="/bread">
                  <FontAwesomeIcon icon={faBreadSlice} className="icons" />
                  <span>인기있는 빵</span>
                </Link>
              </li>
              <li className={location.pathname === '/youtube-bread' ? 'clickIcons' : ''}>
                <Link to="/youtube-bread">
                  <FontAwesomeIcon icon={faYoutube} className="icons" />
                  <span>유튜버 픽빵</span>
                </Link>
              </li>
              <li className={location.pathname === '/community' ? 'clickIcons' : ''}>
                <Link to="/community?menu=notice">
                  <FontAwesomeIcon icon={faCalendar} className="icons" />
                  <span>커뮤니티</span>
                </Link>
              </li>
              <li className={location.pathname === '/login' ? 'clickIcons' : ''}>
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} className="icons" />
                  <span>내정보</span>
                </Link>
              </li>
            </ul>
          </div>

          <NaveSearch>
            <div className="headerSearch" onClick={handleClick} aria-hidden="true" role="button">
              <span />
            </div>
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="빵집을 찾아보세요." value={title} onChange={handleChange} />
            </form>
          </NaveSearch>

          {/* 모바일 검색 */}
          <div className="mobile_search">
            {search ? (
              <>
                <form onSubmit={handleSearch}>
                  <input type="text" placeholder="빵집을 찾아보세요." value={title} onChange={handleChange} />
                </form>
              </>
            ) : (
              ''
            )}
          </div>
        </GroupNav>
      </HeaderWrap>
    </>
  );
};
const userProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

Header.propTypes = {
  currentUser: PropTypes.instanceOf(Object),
  onLogout: PropTypes.func.isRequired
};

Header.defaultProps = {
  currentUser: null
};

const logoutToPropsDispatch = (dispatch) => ({
  onLogout: () => dispatch(setLogout())
});

export default connect(userProps, logoutToPropsDispatch)(Header);
