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
import { setShopDetailComment, setShopDetailCommentMore, setRegisterComment, setCommentModify, setCommentDelete } from '../../redux/breadshop/comment/breadShopComment.actions';
import { selectShopComment, selectShopCommentPagnaition } from '../../redux/breadshop/comment/breadShopComment.selectors';

const limit = 20;

const Comment = ({ match, onDetailComment, onDetailCommentMore, onRegisterComment, onCommentModify, onCommentDelete, shopDetailComment, shopCommentPagnaition }) => {
  // 댓글등록
  const [comment, setComment] = useState('');
  const { breadShopId } = match;

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchDetailComment() {
      try {
        const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}?page=${page}&limit=${limit}`);

        if (status === 200) {
          onDetailComment(data.list, data.pagination);
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
      const commentObject = {
        content: comment
      };
      const { status, data } = await axios.post(`/comment/bread/shop/${breadShopId}`, commentObject);

      if (status === 201) {
        onRegisterComment(data.data);
        setComment('');
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // 더보기 버튼
  const moreButtonClick = async () => {
    try {
      const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}?page=${page + 1}&limit=${limit}`);

      if (status === 200) {
        onDetailCommentMore(data.list, data.pagination);
        setPage(page + 1);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <CommentWrap>
      <CommentBox>
        <h2>현재 {shopCommentPagnaition?.totalCount || '0'}개의 댓글</h2>
        <form onSubmit={registerSubmit}>
          <textarea placeholder="댓글을 입력해 주세요." onChange={handleComment} value={comment} name="comment" />
          <button type="submit" className="registerButton">
            등록하기
          </button>
        </form>
      </CommentBox>

      {shopDetailComment.map((comment) => (
        <RegisterComment key={`comment-${comment.id}`} comment={comment} onCommentModify={onCommentModify} onCommentDelete={onCommentDelete} breadShopId={breadShopId} />
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
  shopCommentPagnaition: null
};

Comment.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailComment: PropTypes.instanceOf(Array).isRequired,
  onRegisterComment: PropTypes.func.isRequired,
  onDetailComment: PropTypes.func.isRequired,
  onDetailCommentMore: PropTypes.func.isRequired,
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  shopCommentPagnaition: PropTypes.instanceOf(Object)
};

const detailCommentStateToProps = createStructuredSelector({
  shopDetailComment: selectShopComment,
  shopCommentPagnaition: selectShopCommentPagnaition
});

const detailCommentDispatch = (dispatch) => ({
  onDetailComment: (comment, pagnation) => dispatch(setShopDetailComment(comment, pagnation)),
  onDetailCommentMore: (comment, pagnation) => dispatch(setShopDetailCommentMore(comment, pagnation)),
  onRegisterComment: (register) => dispatch(setRegisterComment(register)),
  onCommentModify: (modify, commentId) => dispatch(setCommentModify(modify, commentId)),
  onCommentDelete: (commentDelete) => dispatch(setCommentDelete(commentDelete))
});

export default connect(detailCommentStateToProps, detailCommentDispatch)(Comment);
