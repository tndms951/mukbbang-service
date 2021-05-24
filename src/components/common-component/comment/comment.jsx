/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { CommentWrap, CommentBox, MoreButton } from './comment_style';
import RegisterComment from './first-commend/first_commend';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';
import { setShopDetailComment, setShopDetailCommentMore, setRegisterComment, setCommentModify, setCommentDelete } from '../../redux/comment/bread_breadShopComment.actions';
import { selectShopComment, selectShopCommentPagnaition } from '../../redux/comment/bread_breadShopComment.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

const limit = 20;

const Comment = ({ match, onDetailComment, onDetailCommentMore, onRegisterComment, onCommentModify, onCommentDelete, shopDetailComment, shopCommentPagnaition, type, currentUser, history, location }) => {
  console.log(shopCommentPagnaition);
  // 댓글등록
  const [comment, setComment] = useState('');
  const { breadShopId } = match;
  const { breadId } = match;
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchDetailComment() {
      try {
        if (type === 'breadHouseType') {
          const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}?page=${page}&limit=${limit}`);

          if (status === 200) {
            onDetailComment(data.list, data.pagination);
          }
        } else if (type === 'breadType') {
          const { data, status } = await axios.get(`/comment/bread/${breadId}`);

          if (status === 200) {
            onDetailComment(data.list, data.pagination);
          }
        }
      } catch (err) {
        errorhandler(err);
      }
    }
    fetchDetailComment();
  }, []);

  // 댓글 핸들체인지1
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  // 댓글등록
  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'breadHouseType') {
        const commentObject = {
          content: comment
        };
        const { status, data } = await axios.post(`/comment/bread/shop/${breadShopId}`, commentObject);

        if (status === 201) {
          onRegisterComment(data.data);
          setComment('');
        }
      } else if (type === 'breadType') {
        const commentObject = {
          content: comment
        };
        const { status, data } = await axios.post(`/comment/bread/${breadId}`, commentObject);

        if (status === 201) {
          onRegisterComment(data.data);
          setComment('');
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // 더보기 버튼
  const moreButtonClick = async () => {
    try {
      if (type === 'breadHouseType') {
        const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}?page=${page + 1}&limit=${limit}`);

        if (status === 200) {
          onDetailCommentMore(data.list, data.pagination);
          setPage(page + 1);
        }
      } else if (type === 'breadType') {
        const { status, data } = await axios.get(`/comment/bread/${breadId}?page=${page + 1}&limit=${limit}`);
        if (status === 200) {
          onDetailCommentMore(data.list, data.pagination);
          setPage(page + 1);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // 비로그인시 comment 클릭시 로그인페이지 이동
  const loginClick = () => {
    if (!currentUser) {
      const comeAddress = encodeURIComponent(location.pathname + location.search);
      history.push(`/signin?moveAddress=${comeAddress}`);
    }
  };

  return (
    <CommentWrap>
      <CommentBox>
        <h2>현재 {shopCommentPagnaition?.totalCount || '0'}개의 댓글</h2>
        <form onSubmit={registerSubmit}>
          <textarea placeholder={currentUser ? '댓글을 입력해 주세요.' : '로그인이 필요한 서비스입니다.'} onChange={handleComment} onClick={loginClick} readOnly={!currentUser} value={comment} name="comment" />
          <button type="submit" className="registerButton">
            등록하기
          </button>
        </form>
      </CommentBox>

      {shopDetailComment.map((comment) => (
        <RegisterComment key={`comment-${comment.id}`} comment={comment} onCommentModify={onCommentModify} onCommentDelete={onCommentDelete} breadShopId={breadShopId} type={type} breadId={breadId} />
      ))}
      {shopCommentPagnaition ? (
        shopCommentPagnaition.currentPage !== shopCommentPagnaition.totalPage ? (
          <MoreButton>
            <button type="button" onClick={moreButtonClick}>
              더보기
            </button>
          </MoreButton>
        ) : null
      ) : null}
    </CommentWrap>
  );
};

Comment.defaultProps = {
  shopCommentPagnaition: null,
  type: undefined,
  currentUser: null,
  history: undefined,
  location: undefined
};

Comment.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailComment: PropTypes.instanceOf(Array).isRequired,
  onRegisterComment: PropTypes.func.isRequired,
  onDetailComment: PropTypes.func.isRequired,
  onDetailCommentMore: PropTypes.func.isRequired,
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  shopCommentPagnaition: PropTypes.instanceOf(Object),
  type: PropTypes.string,
  currentUser: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object)
};

const detailCommentStateToProps = createStructuredSelector({
  shopDetailComment: selectShopComment,
  shopCommentPagnaition: selectShopCommentPagnaition,
  currentUser: selectCurrentUser
});

const detailCommentDispatch = (dispatch) => ({
  onDetailComment: (comment, pagnation) => dispatch(setShopDetailComment(comment, pagnation)),
  onDetailCommentMore: (comment, pagnation) => dispatch(setShopDetailCommentMore(comment, pagnation)),
  onRegisterComment: (register) => dispatch(setRegisterComment(register)),
  onCommentModify: (modify, commentId) => dispatch(setCommentModify(modify, commentId)),
  onCommentDelete: (commentDelete) => dispatch(setCommentDelete(commentDelete))
});

export default connect(detailCommentStateToProps, detailCommentDispatch)(Comment);
