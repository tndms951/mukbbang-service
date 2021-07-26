import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { errorhandler } from '../../../../utils/common';
import axios from '../../../../utils/axios';
import { ReComment, ButtonWrap } from './second_recomment_style';
import { setReCommentModify, setReCommentDelete } from '../../../redux/comment/bread_breadShopComment.actions';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

const Recommend = ({ list, reCommendOpen, onReCommentModify, comment, onReCommentDelete, userLoginInfo, type }) => {
  console.log(list);
  console.log(userLoginInfo);
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
      if (type === 'breadHouseType') {
        const reCommentObject = {
          content: modifyForm
        };
        const { status } = await axios.put(`/comment/bread/shop/${reCommentId}`, reCommentObject);
        if (status === 201) {
          onReCommentModify(comment.id, reCommentId, modifyForm);
        }
        setModifyInput(false);
      } else if (type === 'breadType') {
        const reCommentObject = {
          content: modifyForm
        };
        const { status } = await axios.put(`/comment/bread/${reCommentId}`, reCommentObject);
        if (status === 201) {
          onReCommentModify(comment.id, reCommentId, modifyForm);
        }
        setModifyInput(false);
      }
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
      if (type === 'breadHouseType') {
        const { status } = await axios.delete(`/comment/bread/shop/${list.id}`);
        if (status === 200) {
          onReCommentDelete(comment.id, list.id);
        }
      } else if (type === 'breadType') {
        const { status } = await axios.delete(`/comment/bread/${list.id}`);
        if (status === 200) {
          onReCommentDelete(comment.id, list.id);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <ReComment>
      {reCommendOpen ? (
        <div className="list_all_wrap">
          <div className="list_wrap" key={`reComment-${list.id}`}>
            <img src={list.user.imageUrl} alt={`${list.user.name}의 이미지`} />
            <p>{list.user.name}</p>
            {modifyInput ? <textarea onChange={reCommentHandle} value={modifyForm} /> : <div className="content">{list.content}</div>}
            <div className="button_">
              <div className="current_date">{moment(list.createdAt).format('YYYY-MM-DD HH:mm')}</div>
              <ButtonWrap>
                {userLoginInfo ? (
                  <>
                    {userLoginInfo.id === list.user.id ? (
                      <>
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
                      </>
                    ) : null}
                  </>
                ) : null}
              </ButtonWrap>
            </div>
          </div>
        </div>
      ) : null}
    </ReComment>
  );
};

Recommend.defaultProps = {
  type: undefined,
  userLoginInfo: null
};

Recommend.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
  reCommendOpen: PropTypes.bool.isRequired,
  onReCommentModify: PropTypes.func.isRequired,
  comment: PropTypes.instanceOf(Object).isRequired,
  onReCommentDelete: PropTypes.func.isRequired,
  userLoginInfo: PropTypes.instanceOf(Object),
  type: PropTypes.string
};

const reCommentStateToProps = createStructuredSelector({
  userLoginInfo: selectCurrentUser
});

const reCommentDispatch = (dispatch) => ({
  onReCommentModify: (commentId, reCommentId, modifyForm) => dispatch(setReCommentModify(commentId, reCommentId, modifyForm)),
  onReCommentDelete: (commentId, reCommentId) => dispatch(setReCommentDelete(commentId, reCommentId))
});

export default connect(reCommentStateToProps, reCommentDispatch)(Recommend);
