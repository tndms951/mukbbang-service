import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { errorhandler } from 'utils/common';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from '../../../../utils/axios';
import { ReComment, ButtonWrap } from './secondRecomment_style';
import { selectShopReComment } from '../../../redux/breadshop/comment/breadShopComment.selectors';
import { setReCommentModify, setReCommentDelete } from '../../../redux/breadshop/comment/breadShopComment.actions';

// eslint-disable-next-line no-unused-vars
const Recommend = ({ list, reCommendOpen, onReCommentModify, comment, onReCommentDelete }) => {
  // 대댓글 수정
  const [modifyInput, setModifyInput] = useState(false);
  const [modifyForm, setModifyForm] = useState('');

  const reCommentClick = () => {
    setModifyInput(!modifyInput);
    setModifyForm(list.content);
  };

  // 수정
  const reCommentHandle = (e) => {
    setModifyForm(e.target.value);
  };

  // 대댓글 수정(저장)
  const reCommentSave = async (reCommentId) => {
    try {
      const reCommentObject = {
        content: modifyForm
      };
      const { status } = await axios.put(`/comment/bread/shop/${reCommentId}`, reCommentObject);
      if (status === 201) {
        onReCommentModify(comment.id, reCommentId, modifyForm);
      }
      setModifyInput(false);
    } catch (err) {
      errorhandler(err);
    }
  };

  // 취소
  const cancelClick = () => {
    setModifyInput(false);
  };

  // 삭제
  const reCommentDelete = async () => {
    try {
      const { status } = await axios.delete(`/comment/bread/shop/${list.id}`);
      if (status === 200) {
        onReCommentDelete(comment.id, list.id);
      }
    } catch (err) {
      errorhandler(err);
    }
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
                      <button type="button" onClick={reCommentClick}>
                        수정
                      </button>
                      <button type="button" onClick={reCommentDelete}>
                        삭제
                      </button>
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
  comment: PropTypes.instanceOf(Object).isRequired,
  onReCommentDelete: PropTypes.func.isRequired
};

const reCommentStateToProps = createStructuredSelector({
  shopDetailModify: selectShopReComment
});

const reCommentDispatch = (dispatch) => ({
  onReCommentModify: (commentId, reCommentId, modifyForm) => dispatch(setReCommentModify(commentId, reCommentId, modifyForm)),
  onReCommentDelete: (commentId, reCommentId) => dispatch(setReCommentDelete(commentId, reCommentId))
});

export default connect(reCommentStateToProps, reCommentDispatch)(Recommend);
