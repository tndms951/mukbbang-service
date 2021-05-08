import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { errorhandler } from 'utils/common';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from '../../../../utils/axios';
import { ReComment, ButtonWrap } from './secondRecomment_style';
import { selectShopReComment } from '../../../redux/breadshop/comment/breadShopComment.selectors';
import { setReCommentModify } from '../../../redux/breadshop/comment/breadShopComment.actions';

const Recommend = ({ list, reCommendOpen, onReCommentModify, comment }) => {
  // 대댓글 수정
  const [modifyInput, setModifyInput] = useState(false);
  const [modifyForm, setModifyForm] = useState(list.content);
  console.log(modifyForm);

  const reCommentClick = () => {
    setModifyInput(!modifyInput);
  };

  // 수정
  const reCommentHandle = (e) => {
    setModifyForm(e.target.value);
  };

  // 댓글 수정(저장)
  const reCommentSave = async (commentId) => {
    console.log(commentId);
    try {
      const reCommentObject = {
        content: modifyForm
      };
      const { status } = await axios.put(`/comment/bread/shop/${commentId}`, reCommentObject);
      if (status === 201) {
        onReCommentModify(comment.id, commentId, modifyForm);
      }
      setModifyInput(false);
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  // 취소
  const cancelClick = () => {
    setModifyInput(list.content);
    setModifyInput(false);
  };

  return (
    <ReComment>
      {reCommendOpen ? (
        <>
          <div className="list_all_wrap">
            <div className="list_wrap" key={`reComment-${list.id}`}>
              <img src="" alt="" />
              <p>{list.user.name}</p>
              {modifyInput ? <textarea onChange={reCommentHandle} value={modifyForm} /> : <div className="content">{list.content}</div>}
              <div className="content">{list.content}</div>
              <div className="abc">
                <div className="current_date">{list.createdAt}</div>
                <ButtonWrap>
                  {modifyInput ? (
                    <>
                      <button type="button" onClick={() => reCommentSave(list.id)}>
                        저장
                      </button>
                      <button type="button" onClick={cancelClick}>
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" onClick={() => reCommentClick()}>
                        수정
                      </button>
                      <button type="button">삭제</button>
                    </>
                  )}
                </ButtonWrap>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </ReComment>
  );
};

Recommend.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  reCommendOpen: PropTypes.bool.isRequired,
  onReCommentModify: PropTypes.func.isRequired,
  comment: PropTypes.instanceOf(Object).isRequired
};

const reCommentStateToProps = createStructuredSelector({
  shopDetailModify: selectShopReComment
});

const reCommentDispatch = (dispatch) => ({
  onReCommentModify: (commentId, reCommentId, modifyForm) => dispatch(setReCommentModify(commentId, reCommentId, modifyForm))
});

export default connect(reCommentStateToProps, reCommentDispatch)(Recommend);
