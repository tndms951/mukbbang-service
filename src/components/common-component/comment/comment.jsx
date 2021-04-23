import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { CommentWrap, CommentBox, AuthorComment, ReComment } from './comment_style';
import axios from '../../../utils/axios';
import { errorhandler } from '../../../utils/common';

const Comment = ({ breadShopId, ShopDetailList }) => {
  console.log(breadShopId);
  console.log(ShopDetailList);

  // 댓글등록
  const [comment, setComment] = useState('');
  console.log(comment);

  // 댓글 핸들체인지
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
      console.log(commentObject);
      if (status === 201) {
        setComment('');
        // history.push(`/rank/bread-house/detail/${breadShopId}`);
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }

    try {
      const { status, data } = await axios.get(`/comment/bread/shop/${breadShopId}`);
      console.log(data);
      if (status === 200) {
        setComment(data.list);
        console.log(data.list);
      }
    } catch (err) {
      errorhandler(err);
      console.log('aaaa');
      console.log(err);
    }
  };

  return (
    <CommentWrap>
      <CommentBox>
        <form onSubmit={registerSubmit}>
          <textarea placeholder="댓글을 입력해 주세요~~~." onChange={handleComment} value={comment} name="comment" />
          <button type="submit" className="registerButton">
            등록하기
          </button>
        </form>
      </CommentBox>

      <AuthorComment>
        <img src="" alt="" />
        <p>UserName</p>
        <span>빵이 넘나 맛있어요~~~</span>
        <div className="date_wrap">
          <span>2020.03.16</span>
          <span className="made_comment">댓글달기</span>
        </div>
      </AuthorComment>

      <ReComment>
        <form>
          <input type="text" name="reviewRegister" placeholder="댓글을 입력해 주세요." />
          <button type="submit">등록하기</button>
          {/* <img src="" alt="" />
      <p>UserName2</p>
      <span className="date">2020.03.16</span>
      <span>오 무슨 맛인가요~?~~~</span> */}
        </form>
      </ReComment>
    </CommentWrap>
  );
};

Comment.propTypes = {
  breadShopId: PropTypes.func.isRequired,
  ShopDetailList: PropTypes.instanceOf(Object).isRequired
};

export default Comment;
