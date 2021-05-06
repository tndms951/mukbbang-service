/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { CommentWrap, CommentBox } from './comment_style';
import RegisterComment from './first-commend/firstCommend';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';

import { setShopDetailComment, setRegisterComment, setCommentModify, setCommentDelete } from '../../redux/breadshop/comment/breadShopComment.actions';
import { selectShopComment } from '../../redux/breadshop/comment/breadShopComment.selectors';

const Comment = ({ match, onDetailComment, onRegisterComment, onCommentModify, onCommentDelete, shopDetailComment }) => {
  console.log(shopDetailComment);
  // 댓글등록
  const [comment, setComment] = useState('');
  const { breadShopId } = match;

  useEffect(() => {
    async function fetchDetailComment() {
      try {
        const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}`);

        if (status === 200) {
          onDetailComment(data.list);
        }
      } catch (err) {
        errorhandler(err);
        console.log(err);
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
      console.log(data);
      if (status === 201) {
        onRegisterComment(data.data);
        setComment('');
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <CommentWrap>
      <CommentBox>
        <h2>현재 10개의 댓글</h2>
        <form onSubmit={registerSubmit}>
          <textarea placeholder="댓글을 입력해 주세요." onChange={handleComment} value={comment} name="comment" />
          <button type="submit" className="registerButton">
            등록하기
          </button>
        </form>
      </CommentBox>

      {shopDetailComment.map((comment) => (
        <RegisterComment comment={comment} onCommentModify={onCommentModify} onCommentDelete={onCommentDelete} breadShopId={breadShopId} />
      ))}
    </CommentWrap>
  );
};

Comment.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  shopDetailComment: PropTypes.instanceOf(Array).isRequired,
  onRegisterComment: PropTypes.instanceOf(Object).isRequired,
  onDetailComment: PropTypes.instanceOf(Object).isRequired,
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired
};

const detailCommentStateToProps = createStructuredSelector({
  shopDetailComment: selectShopComment
});

const detailCommentDispatch = (dispatch) => ({
  onDetailComment: (comment) => dispatch(setShopDetailComment(comment)),
  onRegisterComment: (register) => dispatch(setRegisterComment(register)),
  onCommentModify: (modify, commentId) => dispatch(setCommentModify(modify, commentId)),
  onCommentDelete: (commentDelete) => dispatch(setCommentDelete(commentDelete))
});

export default connect(detailCommentStateToProps, detailCommentDispatch)(Comment);
