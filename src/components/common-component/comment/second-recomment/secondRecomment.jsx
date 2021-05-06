import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { errorhandler } from 'utils/common';
import axios from '../../../../utils/axios';
import { ReComment } from './secondRecomment_style';
import { setReCommentRegister } from '../../../redux/breadshop/comment/breadShopComment.actions';
import { selectShopReComment } from '../../../redux/breadshop/comment/breadShopComment.selectors';

const Recommend = ({ breadShopId, commenstId, reComment, onReCommentRegister }) => {
  console.log(reComment);

  // 대댓글
  const [reCommendOpen, setReCommendOpen] = useState(false);
  const [reCommendForm, setReCommendForm] = useState('');

  const reCommendClick = () => {
    setReCommendOpen(!reCommendOpen);
  };

  const reCommentChange = (e) => {
    setReCommendForm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reCommentObject = {
        content: reCommendForm
      };

      const { status, data } = await axios.post(`/comment/bread/shop/${breadShopId}/${commenstId}`, reCommentObject);

      if (status === 201) {
        onReCommentRegister(data.data, commenstId);
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <ReComment>
      {reCommendOpen ? (
        <button type="button" className="made_comment" onClick={reCommendClick}>
          취소
        </button>
      ) : (
        <button type="button" className="made_comment" onClick={reCommendClick} aria-hidden="true">
          댓글{reComment.length}개
        </button>
      )}
      {reCommendOpen ? (
        <>
          <div className="aaa">
            {reComment.map((list) => (
              <div className="bbb" key={`reComment-${list.id}`}>
                <img src="" alt="" />
                <p>{list.user.name}</p>
                <div className="content">{list.content}</div>
                <div>{list.createdAt}</div>
                <button type="button">수정</button>
                <button type="button">삭제</button>
              </div>
            ))}
            <form onSubmit={handleSubmit}>
              <textarea className="reCommend_Input" onChange={reCommentChange} value={reCommendForm} placeholder="댓글을 입력해 주세요." />
              <button type="submit" className="recomment_button">
                댓글등록
              </button>
            </form>
          </div>
        </>
      ) : null}
    </ReComment>
  );
};

Recommend.propTypes = {
  breadShopId: PropTypes.number.isRequired,
  commenstId: PropTypes.number.isRequired,
  reComment: PropTypes.instanceOf(Array).isRequired,
  // shopDetailReComment: PropTypes.instanceOf(Array).isRequired,
  onReCommentRegister: PropTypes.instanceOf(Object).isRequired
};

const reCommentStateToProps = createStructuredSelector({
  shopDetailReComment: selectShopReComment
});

const reCommentDispatch = (dispatch) => ({
  onReCommentRegister: (register, commenstId) => dispatch(setReCommentRegister(register, commenstId))
});

export default connect(reCommentStateToProps, reCommentDispatch)(Recommend);
