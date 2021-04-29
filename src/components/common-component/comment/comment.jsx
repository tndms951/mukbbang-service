/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CommentWrap, CommentBox, ReComment } from './comment_style';
import RegisterComment from './value-commend/valueCommend';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';

const Comment = ({ breadShopId, onRegisterComment, shopDetailComment }) => {
  console.log(shopDetailComment);
  // 댓글등록
  const [comment, setComment] = useState('');
  console.log(comment);

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
        <RegisterComment comment={comment} />
      ))}

      <ReComment>
        {/* <form>
          <input type="text" name="reviewRegister" placeholder="댓글을 입력해 주세요." />
          <button type="submit">등록하기</button>
          <img src="" alt="" />
          <p>UserName2</p>
          <span className="date">2020.03.16</span>
          <span>오 무슨 맛인가요~?~~~</span>
        </form> */}
      </ReComment>
    </CommentWrap>
  );
};

Comment.propTypes = {
  breadShopId: PropTypes.number.isRequired,
  onRegisterComment: PropTypes.instanceOf(Object).isRequired,
  shopDetailComment: PropTypes.instanceOf(Array).isRequired
};

export default Comment;
